import { Module } from '@nestjs/common';
import { CarCRUDService } from './services/car-crud.service';
import { CarController } from './controllers/car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Manufacturer } from './entities/manufacturer.entity';
import { Owner } from './entities/owner.entity';
import { CarDiscountCalculator } from './car-discount-calculator.class';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Manufacturer, Owner])],
  providers: [CarCRUDService, CarDiscountCalculator],
  controllers: [CarController],
})
export class CarManagementModule {}
