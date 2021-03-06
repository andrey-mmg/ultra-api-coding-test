import { Module } from '@nestjs/common';
import { CarCRUDService } from './services/car-crud.service';
import { CarController } from './controllers/car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Manufacturer } from './entities/manufacturer.entity';
import { Owner } from './entities/owner.entity';
import { CarDiscountCalculator } from './car-discount-calculator.class';
import { CarMarketService } from './services/car-market.service';
import { DISCOUNT_PERCENT } from './constants';
import { SystemClockService } from './services/system-clock.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Manufacturer, Owner])],
  providers: [
    CarDiscountCalculator,
    CarMarketService,
    CarCRUDService,
    SystemClockService,
    {
      provide: DISCOUNT_PERCENT,
      useValue: 20,
    },
  ],
  controllers: [CarController],
})
export class CarManagementModule {}
