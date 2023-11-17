export const iserror = function(error,self) {
    console.log(error);
    switch (error.response.status) {
        case 404:
            self.$notify({
                title: error.response.statusText,
                text: error.message,
                type: 'error',
                duration: 5000, // Durasi notifikasi dalam milidetik
            });
            break;
    
        default:
            break;
    }
  };