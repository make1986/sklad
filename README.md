# Class DataBase

## GetByParams Method

Method "getByParams" is advanced and is used for any collection. An argument is required as an object with the following fields:
page: int
limit: int
sort: String
params: String
search: String

### Page

"Page" is needed in order to calculate the point from which the report of the collection elements will begin. The starting point is measured by the formula: skip = (page - 1) \* limit;

### Sort

"Sort" is a string that is written in the format "key = value".
"key" is the collection field by which to sort the data.
"value" is the sort type. It can be 1 and -1.

### Params

"Params" is a string like "key=value||key1=value1&&key2=value2".
"key" is the collection field.
"value" is the value of the field.

Separators "||" and "&&" are logical operators "or" and "and" and ". The operator "and" is always higher priority than the operator "or". That is, an entry of the type "key=value||key1=value1&&key2=value2" will be converted as follows:
{$and: [
  {$or: [{key: value}, {key1: value1}]}, {\$or: [{key2: value2}]}
]}

"value" may contain a string like "+inFrank". This will mean looking for the word Frank in the array.
"value" may contain a string like "+elemName+:Frank". This will mean finding the word Frank in the Name element of an array of objects.
"value" may contain a string like "+lte99". This means that we are looking for all options with a value greater than or equal to 99.
"value" may contain a string like "+gte99". This means that we are looking for all options with a value less than or equal to 99.

### Search

The test works in the same way as #Params works, but does not have a && separator.
