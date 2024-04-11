function fetchData(callback) {
        // Asynchronous operation
        setTimeout(function() {
            const data = 'All subjects';
            callback(data);
        }, 1000);
    }
    
    fetchData(function(data) {
        console.log('Data received:', data);
    });
    