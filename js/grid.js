          function hidegrid(gridId, wmId, color){
            let grid = document.getElementsByClassName('gridimg');
              for (let i = 0; i < grid.length; i++){
                grid[i].style.display = 'none';
            }
            document.getElementById(gridId).style.display = 'block';
            document.getElementById(wmId).style.cssText = `visibility: visible; color: ${color}; opacity: 60%;`
          }

            function showgrid(gridId, wmId){
              let grid = document.getElementsByClassName('gridimg');
                for (let i = 0; i < grid.length; i++){
                  grid[i].style.display = 'block';
              }
              document.getElementById(wmId).style.visibility = 'hidden';
          } // error occuring on right half of grid
