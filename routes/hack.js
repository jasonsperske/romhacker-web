import { Router } from 'express';
import { fetchData } from '../utils/index.js';

const router = Router();

router.route('/:id')
    .get((req, res) => {
        const hackId = req.params.id;
        fetchData(`./static/data/hack/${hackId}/index.json`)
            .then(hackData => {
                res.render('hack/view', {
                    title: 'Hack Detail',
                    hack: hackData
                });
            })
            .catch(err => {
                console.error(err);
                res.status(404).render('error', {
                    message: 'Hack not found'
                });
            });
    });

export default router;
