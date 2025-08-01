// ROM Patcher client functionality
// Custom IPS patcher implementation for browser

function applyIPSPatch(romData, patchData) {
  // Check IPS header "PATCH"
  if (
    patchData[0] !== 0x50 ||
    patchData[1] !== 0x41 ||
    patchData[2] !== 0x54 ||
    patchData[3] !== 0x43 ||
    patchData[4] !== 0x48
  ) {
    throw new Error("Invalid IPS patch file - missing PATCH header");
  }

  const result = new Uint8Array(romData);
  let offset = 5;

  while (offset < patchData.length - 3) {
    // Check for EOF marker "EOF"
    if (
      patchData[offset] === 0x45 &&
      patchData[offset + 1] === 0x4f &&
      patchData[offset + 2] === 0x46
    ) {
      break;
    }

    // Read address (3 bytes, big endian)
    const address =
      (patchData[offset] << 16) |
      (patchData[offset + 1] << 8) |
      patchData[offset + 2];
    offset += 3;

    // Read size (2 bytes, big endian)
    const size = (patchData[offset] << 8) | patchData[offset + 1];
    offset += 2;

    if (size === 0) {
      // RLE encoding
      const rleSize = (patchData[offset] << 8) | patchData[offset + 1];
      offset += 2;
      const value = patchData[offset];
      offset += 1;

      // Apply RLE data
      for (let i = 0; i < rleSize; i++) {
        if (address + i < result.length) {
          result[address + i] = value;
        }
      }
    } else {
      // Normal patch data
      for (let i = 0; i < size; i++) {
        if (address + i < result.length && offset + i < patchData.length) {
          result[address + i] = patchData[offset + i];
        }
      }
      offset += size;
    }
  }

  return result;
}

// Export ROM patcher functionality
window.RomPatcherClient = {
  applyIPSPatch,

  async applyPatch(romFile, patchData) {
    const romData = await romFile.arrayBuffer();
    const patchedData = applyIPSPatch(
      new Uint8Array(romData),
      new Uint8Array(patchData)
    );
    return new Blob([patchedData], { type: "application/octet-stream" });
  },
};
