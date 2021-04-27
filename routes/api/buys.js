const { Router } = require('express')

const BuyketListItem = require('../../models/buy')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const buyketListItems = await BuyketListItem.find()
        if (!buyketListItems) throw new Error('No useketListItems')
        const sorted = buyketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })


    }
})


  

router.post('/', async (req, res) => {
    const newbuy = new BuyketListItem(req.body)
    try {
        const buyketListItem = await newbuy.save()
        if (!buyketListItem) throw new Error('Something went wrong saving the bucketListItem')
        res.status(200).json(buyketListItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await BuyketListItem.findByIdAndUpdate(id, req.body)
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
        const removed = await BuyketListItem.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
