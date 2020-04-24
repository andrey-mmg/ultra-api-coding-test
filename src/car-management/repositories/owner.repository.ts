import { AbstractRepository, EntityRepository, In } from 'typeorm';
import { OwnerId } from '../types';
import { Owner } from '../entities/owner.entity';

@EntityRepository(Owner)
export class OwnerRepository extends AbstractRepository<Owner> {
  public async findByIdsArray(ids: OwnerId[]): Promise<Owner[]> {
    if (ids.length === 0) {
      return [];
    }

    return this.repository.find({ where: { id: In(ids) } });
  }
}