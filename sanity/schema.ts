import { type SchemaTypeDefinition } from 'sanity'
import practiceSheet from './schemas/practiceSheet'
import newsletter from './schemas/newsletter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [practiceSheet, newsletter]
}
