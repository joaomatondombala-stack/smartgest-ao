import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';

@Injectable()
export class UserService {
   
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  
async create(createUserDto: CreateUserDto) {
  console.log(createUserDto);

  const user = this.userRepository.create(createUserDto);
  return await this.userRepository.save(user);
}
  /*create(createUserDto: any) {
    return 'Utilizador criado com sucesso';*/
  
    /*
  findAll
    return `This action returns all user`;
    */

   async findAll() {
    return await
    this.userRepository.find();
  }

 async findOne(id: number) {
  return await this.userRepository.findOne({
    where: { id },
  });
}

  async update(id: number, updateUserDto: UpdateUserDto) {
  await this.userRepository.update(id, updateUserDto);

  return this.userRepository.findOne({
    where: { id },
  });
}


 async remove(id: number) {
  const user = await this.userRepository.findOne({
    where: { id },
  });

  if (!user) {
    return { message: 'Utilizador não encontrado' };
  }

  await this.userRepository.remove(user);

  return {
    message: 'Utilizador eliminado com sucesso',
  };
}
    
}
