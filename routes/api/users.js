const { Router } = require('express')

const UserketListItem = require('../../models/user')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const useketListItems = await UserketListItem.find()
        if (!useketListItems) throw new Error('No useketListItems')
        const sorted = useketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })


    }
})


  

router.post('/', async (req, res) => {
    const newuser = new UserketListItem(req.body)
    try {
        const useketListItem = await newuser.save()
        if (!useketListItem) throw new Error('Something went wrong saving the bucketListItem')
        res.status(200).json(useketListItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await UserketListItem.findByIdAndUpdate(id, req.body)
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
        const removed = await UserketListItem.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
