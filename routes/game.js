import { Router } from 'express';
import { fetchData } from '../utils/index.js';

const router = Router();

router.route('/')
    .get((req, res) => {
        res.render('game/index', {
            title: 'Game List',
            message: 'Browse our collection of games.'
        });
    });

router.route('/:id')
    .get((req, res) => {
        const gameId = req.params.id;
        fetchData(`./static/data/game/${gameId}.json`)
            .then(gameData => {
                res.render('game/view', {
                    title: 'Game Detail',
                    game: gameData
                });
            })
            .catch(err => {
                console.error(err);
                res.status(404).render('error', {
                    message: 'Game not found'
                });
            });
    });

export default router;