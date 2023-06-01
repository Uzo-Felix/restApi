const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.route('/').get(controller.getStudents).post(controller.addStudent);
router.route('/:id').get(controller.getStudentById).put(controller.updateStudent).delete(controller.removeStudent);

module.exports = router;