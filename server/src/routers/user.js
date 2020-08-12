const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
   const { body } = req

   const user = new User(body)
   try {
      const token = await user.generateAuthToken()
      await user.save()

      res.status(201).send({ user, token })
   } catch (e) {
      res.status(400).send(e)
   }
})

router.post('/users/login', async (req, res) => {
   const { email, password } = req.body

   try {
      const user = await User.findByCredentials(email, password)
      const token = await user.generateAuthToken()

      res.send({ user, token })
   } catch (e) {
      res.status(400).send(e)
   }
})

router.post('/users/logout', auth, async (req, res) => {
   try {
      req.user.tokens = req.user.tokens.filter((tokenObj) => {
         return tokenObj.token !== req.token
      })

      await req.user.save()
      res.send()
   } catch (e) {
      res.status(500).send()
   }
})

router.get('/users/me', auth, async (req, res) => {
   res.send(req.user)
})

router.delete('/users/me', auth, async (req, res) => {
   try {
      await req.user.remove()
      res.send(req.user)
   } catch (e) {
      res.status(500).send()
   }
})

module.exports = router