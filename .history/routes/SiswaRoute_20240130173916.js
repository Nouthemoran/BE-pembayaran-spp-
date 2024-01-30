import express from 'express';
import { 
    getSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
 } from '../controllers/SiswaController.js'; 

const router = express.Router();


router.get('/siswa', getSiswa);
router.get('/Siswa/:id', getSiswaById);
router.post('/Siswa', createSiswa);
router.patch('/Siswa/:id', updateSiswa);
router.delete('/Siswa/:id', deleteSiswa);

export default router;