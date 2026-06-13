const sql = require('mssql/msnodesqlv8');

const config = {
  connectionString: 'Driver={ODBC Driver 18 for SQL Server};Server=LAPTOP-9F7D3KSF;Database=hllSystem;Trusted_Connection=Yes;Encrypt=yes;',
};

sql.connect(config)
  .then(pool => {
    console.log('✅ Connected!');
    return pool.request().query('SELECT 1 AS test');
  })
  .then(result => {
    console.log('Query Result:', result.recordset);
    sql.close();
  })
  .catch(err => {
    console.error('❌ Connection failed:', err);
  });