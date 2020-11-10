const inject = (source, contents) => {
          const result = [];
        
          for (let i = 0; i < source.length; i++) {
            const content = contents.find(({ index }) => index === i);
        
            if (content) {
              result.push(content.content);
            }
        
            result.push(source[i]);
          }
        
          return result;
        };
        
        export { inject };