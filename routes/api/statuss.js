const { Router } = require('express')

const StaketListItem = require('../../models/status')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const staketListItems = await StaketListItem.find()
        if (!staketListItems) throw new Error('No useketListItems')
        const sorted = staketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })


    }
})


  

router.post('/', async (req, res) => {
    const newsta = new StaketListItem(req.body)
    try {
        const staketListItem = await newsta.save()
        if (!staketListItem) throw new Error('Something went wrong saving the bucketListItem')
        res.status(200).json(staketListItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await StaketListItem.findByIdAndUpdate(id, req.body)
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
        const removed = await StaketListItem.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
