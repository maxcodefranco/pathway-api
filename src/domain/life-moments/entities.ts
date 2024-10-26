import { Entity, EntityOptions } from 'typeorm';
import { DatabasesConnectionName } from '../definitions';

const baseEntityMetadata: EntityOptions = {
  schema: 'pathway_context',
  database: DatabasesConnectionName.MAIN_DATABASE_URL,
};

@Entity({ ...baseEntityMetadata, name: 'life_moments' })
export class LifeMoment {
  id: string;
  name: string;
  description: string;
}

@Entity({ ...baseEntityMetadata, name: 'pathways' })
export class Pathway {
  id: string;
  name: string;
  description: string;
}
