import express from 'express';

const dictionary = [];
export const dictionaryRouter = express.Router();




// GET
dictionaryRouter.get('/', (req, res) => {
    return res.status(200).json( { dictionary } );
});







// POST
dictionaryRouter.post('/', (req, res) => {

    const abc = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    const requiredKeys = ['word'];
    
    if(req.body.word === undefined) {
        return res.status(400).json({
            status: 'error',
            msg: 'Gautas objektos formatas neatitinka reikalavimu - reikalingas raktas "word"',
        })
    }
    
    if (Object.keys(req.body).length !== requiredKeys.length) {
        return res.status(400).json({
            status: 'error',
            msg: 'Neteisingas objekto raktu kiekis',
        })
    }

    if (typeof req.body.word !== 'string') {
        return res.status(400).json({
            status: 'error',
            msg: 'galima itraukti tik tekstaa',
        });
    }

    if (req.body.word === ''){
        return res.status(400).json({
            status: 'error',
            msg: `Nurodytoje reiksmeje privalo buti ne tuscias tekstas`
        })
    }
    for (const letter of req.body.word) {
        if (!abc.includes(letter)){
            return res.status(400).json({
                status: 'error',
                msg: `Nurodytoje reiksmeje yra neleistinas simbolis "${letter}"`
            })
        }
    }

    if (dictionary.includes(req.body.word)) {
        return res.status(400).json({
            status: 'error',
            msg: 'toks zodis jau egzistuoja'
        });
    }
    
    dictionary.push(req.body.word);

    return res.status(201).json({
        status: 'success',
        msg: 'Naujas zodis priimtas sekmingai'
    });
});

// PUT
dictionaryRouter.put('/', (req, res) => {
    return res.status(501).send('(PUT) Dictionary: Not implemented');
});

// DELETE
dictionaryRouter.delete('/', (req, res) => {
    console.log('param', req.params);
    console.log('JSON', req.body);


    return res.status(501).send('(DELETE) Dictionary: Not implemented');
});