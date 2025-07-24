import fs from 'fs';

export function fetchData(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    resolve(JSON.parse(data));
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
}
