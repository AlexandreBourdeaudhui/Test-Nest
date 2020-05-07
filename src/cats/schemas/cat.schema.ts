/*
 * Package Import
 */
import * as mongoose from 'mongoose';

/*
 * Local Import
 */

/*
 * Schema
 */
export const CatSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  breed: String,
});
