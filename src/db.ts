import films from './data.json'

// export interface DbItem {
//     id: string;
//     title: string;
//     original_title: string;
//     original_title_romanised: string;
//     image: string;
//     movie_banner: string;
//     description: string;
//     director: string;
//     producer: string;
//     release_date: number;
//     running_time: number;
//     rt_score: number;
//     people: string[];
//     species: string[];
//     locations: string[];
//     vehicles: string[];
//     url: string;
// }


// export interface DbItemWithId extends DbItem {
//   id: number;
// }

const db = films;

/** Variable to keep incrementing id of database items */
let idCounter = 0;

/**
 * Adds in some dummy database items to the database
 *
 * @param n - the number of items to generate
 * @returns the created items
 */
// export const addDummyDbItems = (n: number): DbItemWithId[] => {
//   const createdSignatures: DbItemWithId[] = [];
//   for (let count = 0; count < n; count++) {
//     const createdSignature = addDbItem({
//       // possibly add some generated data here
//     });
//     createdSignatures.push(createdSignature);
//   }
//   return createdSignatures;
// };

/**
 * Adds in a single item to the database
 *
 * @param data - the item data to insert in
 * @returns the item added (with a newly created id)
 */
// export const addDbItem = (data: DbItem): DbItem => {
//   const newEntry: DbItem = {
//     id: ++idCounter,
//     ...data,
//   };
//   db.push(newEntry);
//   return newEntry;
// };

/**
 * Deletes a database item with the given id
 *
 * @param id - the id of the database item to delete
 * @returns the deleted database item (if originally located),
 *  otherwise the string `"not found"`
//  */
// export const deleteDbItemById = (id: number): DbItem | "not found" => {
//   const idxToDeleteAt = findIndexOfDbItemById(id);
//   if (typeof idxToDeleteAt === "number") {
//     const itemToDelete = getDbItemById(id);
//     db.splice(idxToDeleteAt, 1); // .splice can delete from an array
//     return itemToDelete;
//   } else {
//     return "not found";
//   }
// };

/**
 * Finds the index of a database item with a given id
 *
 * @param id - the id of the database item to locate the index of
 * @returns the index of the matching database item,
 *  otherwise the string `"not found"`
//  */
// const findIndexOfDbItemById = (id: number): number | "not found" => {
//   const matchingIdx = db.findIndex((entry) => entry.id === id);
//   // .findIndex returns -1 if not located
//   if (matchingIdx !== -1) {
//     return matchingIdx;
//   } else {
//     return "not found";
//   }
// };

/**
 * Find all database items
 * @returns all database items from the database
 */
export const getAllDbItems = () => {
  return db;
};

/**
 * Locates a database item by a given id
 *
 * @param id - the id of the database item to locate
 * @returns the located database item (if found),
 *  otherwise the string `"not found"`
 */
// export const getDbItemById = (id: number): DbItem | "not found" => {
//   const maybeEntry = db.find((entry) => entry.id === id);
//   if (maybeEntry) {
//     return maybeEntry;
//   } else {
//     return "not found";
//   }
// };

/**
 * Applies a partial update to a database item for a given id
 *  based on the passed data
 *
 * @param id - the id of the database item to update
 * @param newData - the new data to overwrite
 * @returns the updated database item (if one is located),
 *  otherwise the string `"not found"`
 */
// export const updateDbItemById = (
//   id: number,
//   newData: Partial<DbItem>
// ): DbItem | "not found" => {
//   const idxOfEntry = findIndexOfDbItemById(id);
//   // type guard against "not found"
//   if (typeof idxOfEntry === "number") {
//     return Object.assign(db[idxOfEntry], newData);
//   } else {
//     return "not found";
//   }
// };
