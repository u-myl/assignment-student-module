import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ){}

    async createStudent(data: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
    }

    async getStudents (): Promise<Student[]>{
        return this.studentRepository.find();
    }

    async getStudentbyId(id: number): Promise<Student>{
        const student = await this.studentRepository.findOneBy({ id });
        if (!student){
            throw new NotFoundException('Student with ID ${id} not found');
        }

        return student;
    }





}
