const doQuery = require('../query');

/* ********************************************************** */

/**
 * Check if person already exists in DB and if yes return true
 * otherwise return false
 * @param {*} firstname
 * @param {*} lastname
 * @returns true/false
 */
async function checkPersonExist(firstname, lastname) {
  let param = [firstname, lastname];
  sql = `SELECT 1 FROM people WHERE FirstName=? AND LastName=? LIMIT 1`;
  result = await doQuery(sql, param);
  console.log(result);
  return result.length > 0 ? true : false;
}

/* ********************************************************** */

/**
 * Check if address already exists in DB and if yes return true
 * otherwise return false
 * @param {*} street
 * @param {*} city
 * @returns true/false
 */
async function checkAddressExist(street, city) {
  let param = [city, street];
  sql = `SELECT 1 FROM addresses WHERE City=? AND street=? LIMIT 1`;
  result = await doQuery(sql, param);
  console.log(result);
  return result.length > 0 ? true : false;
}

/* ********************************************************** */
/**
 * get max id for insertion
 * If table is empty first ID will be 1
 * @param {*} table
 * @returns ID one after MAX
 */
async function findMaxID(table) {
  let id = 1;
  let sql = `SELECT MAX(id) AS max_count FROM ${table}`;
  let result = await doQuery(sql, []);

  if (result[0]['max_count']) {
    // If the first element does not exist
    id = result[0]['max_count'] + 1;
  }
  return id;
}

/* ********************************************************** */
/**
 * Add person to DB and also its relation to addresses
 * (dependencies with foreign keys)
 * @param {} firstname
 * @param {*} lastname
 * @param {*} res
 * @returns redirection
 */
async function add2DB(person) {
  const { firstname, lastname, street, city } = person;
  console.log(person);
  if (!firstname || !lastname || !street || !city) {
    return 'Please provide all user data';
  }

  let found = await checkPersonExist(firstname, lastname);
  if (found) {
    // terminate request
    // 401  status code indicates that the client request has not been completed
    // because it lacks valid authentication credentials for the requested resource.
    return 'User already exists';
  }
  /////////////////////////////////////////////////
  // new person
  // find max index to insert
  const personID = await findMaxID('people');
  let param = [firstname, lastname, personID];
  // insert person to people table
  sql = `INSERT INTO people (FirstName, LastName, ID) VALUES (?,?,?);`;
  result = await doQuery(sql, param);

  /////////////////////////////////////////////////
  // insert address if doesn't exist
  // if exists, just extract its index
  let addressID;
  found = await checkAddressExist(street, city);

  if (!found) {
    addressID = await findMaxID('addresses');
    param = [street, city, addressID];
    sql = `INSERT INTO addresses (Street, City, ID) VALUES (?,?,?);`;
    result = await doQuery(sql, param);
  } else {
    // address already exist -> check its ID
    param = [street, city];
    sql = `SELECT ID FROM addresses  WHERE City=? AND street=?`;
    const result = await doQuery(sql, param);
    addressID = result[0].ID;
  }

  // now insert relation to addresses
  param = [personID, addressID];
  sql = `INSERT INTO personaddress (PersonID, AddressID) VALUES (?,?)`;
  result = await doQuery(sql, param);

  console.log('insert operation has completed successfully');
  return 'OK';
}

/* ********************************************************** */
/**
 * Form post
 * @param {*} req
 * @param {*} res
 * @returns status and redirects
 */
async function addEvent(req, res, isAjax) {
  // access to form data by urlencoded/json middleware (req.body)

  let answer = '';
  console.log(req.body);

  // save to the database
  answer = await add2DB(req.body);

  if (isAjax) {
    return res.json({ result: answer });
  } else {
    if (answer !== 'OK') {
      return res.status(401).send(answer);
    }
    // stay on the same page
    return res.redirect('/');
  }
}

module.exports = addEvent;
