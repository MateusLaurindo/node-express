import plataformas from "../models/Plataformas.js";

class PlataformaController {
    static listarPlataformas = (req, res) => {
        plataformas.find((err, plataformas) => {
            res.status(200).json(plataformas)
        })
    }

    static cadastrarPlataformas = (req, res) => {
        let plataforma = new plataformas(req.body);

        plataforma.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - faha ao cadastrar plataforma`});
            } else {
                res.status(201).send(plataforma.toJSON())
            }
        })
    }
    static atualizarPlataforma = (req, res) => {
        const id = req.params.id;

        plataformas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Plataforma atualizado com sucesso'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static listarPlataformaPorId = (req, res) => {
        const id = req.params.id;

        plataformas.findById(id, (err, plataformas) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do plataforma não localizada`});
            } else {
                res.status(200).send(plataformas)
            }
        })
    }
    static excluirPlataforma = (req, res) => {
        const id = req.params.id;

        plataformas.findByIdAndDelete(id,  (err) => {
            if(!err) {
                res.status(200).send({message: 'Plataforma removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default PlataformaController