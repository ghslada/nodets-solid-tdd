import { StudentsRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository{
    public items: Student[] = [];

    findById(id: string): Promise<Student | null> {

        return new Promise( (resolve, reject) => {
            const student = this.items.find(student => student.id == id);

            student? resolve(student) : reject(null);

        });
        
    }
};