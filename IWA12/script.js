const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
  };
  
  // Example status values
  let status = 'shelf';
  let reserve = 'reserved';
  let checkout = 'overdue';
  let checkin = 'checkedOut';
  
  const selector = (status) => {
    return {
      color: 'black',
      style: {
        color: STATUS_MAP[status].color,
      },
      reserve: STATUS_MAP[status].canReserve ? 'enabled' : 'disabled',
      checkout: STATUS_MAP[status].canCheckout ? 'enabled' : 'disabled',
      checkin: STATUS_MAP[status].canCheckIn ? 'enabled' : 'disabled',
    };
  };
  
 
  