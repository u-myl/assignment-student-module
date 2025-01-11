import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService){}

    @Post()
    async createStudent(@Body() data: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(data);
    }

    @Get()
    async getStudent(): Promise<Student[]>{
        return this.studentService.getStudents();
    }

    @Get(':id')
    async geStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentService.getStudentbyId(id);
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id: number,
        @Body() data: Partial<Student>,
    ): Promise<Student>{
        return this.studentService.updateStudent(id, data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: number): Promise<void> {
        return this.studentService.deleteStudent(id);
    }
}
