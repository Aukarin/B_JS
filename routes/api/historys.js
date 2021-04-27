const { Router } = require('express')
const History = require('../../models/history')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const sellketListItems = await History.find()
        if (!sellketListItems) throw new Error('No bucketListItems')
        const sorted = sellketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })


    }
})


router.post('/', async (req, res) => {
    const newSellketListItem = new History(req.body)
    try {
        const sellketListItem = await newSellketListItem.save()
        if (!sellketListItem) throw new Error('Something went wrong saving the bucketListItem')
        res.status(200).json(sellketListItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await History.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await History.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
