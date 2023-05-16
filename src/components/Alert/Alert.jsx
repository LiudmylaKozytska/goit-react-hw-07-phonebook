import Swal from 'sweetalert2';

export const alertContactInclude = name => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${name} is already in contacts`,
  });
};

export const alertAddContactSuccess = name => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Your contact ${name} has been saved`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const alertDeleteContactSuccess = name => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Your contact ${name} was deleted`,
    showConfirmButton: false,
    timer: 1500,
  });
};
