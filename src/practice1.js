const objects = (keys, values) => {
          const obj = {};
        
          keys.forEach((key, i) => {
            obj[key] = values[i];
          });
        
          return obj;
        };
        
        const parseData = (source) => {
          const { data, column } = source;
          const keys = column.map((c) => c.name);
          return data.map((values) => objects(keys, values));
        };
        
        export { parseData };