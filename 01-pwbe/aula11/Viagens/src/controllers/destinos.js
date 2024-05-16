const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

const create = async (req, res) => {
    const data  = req.body;

    console.log(data);

    const destino = await prisma.destinos.create({
        data
    });

    res.status(201).json(destino).end();
}

const read = async (req, res) => {
    const destinos = await prisma.destinos.findMany({
        include: {
            hoteis: true,
            pontoTuristicos: true
        }
    });

    res.status(200).json(destinos).end();
}

const remove = async (req, res) => {
    const destino = await prisma.destinos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(destino).end();
}

//param id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const destino = await prisma.destinos.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(destino).end();
}
   
module.exports = {
    create,
    read,
    remove,
    update
}