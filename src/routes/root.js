import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';
import returnLink from '../controllers/root/returnLink';

const root = express.Router()

root.get('/', getRoot)
root.post('/', postRoot)
root.get("/api/link", returnLink)

export default root