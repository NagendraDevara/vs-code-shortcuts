let tabChange = function (val) {
    let ele = document.querySelectorAll('.otp');
    if (ele[val - 1].value != '') {
      ele[val]?.focus()
    } else if (ele[val - 1].value == '') {
      ele[val - 2]?.focus()
    }
  }
  document.getElementById('verifyBtn').addEventListener('click', () => {
    chatIdVal = ''
    // console.log(document.getElementById('idForm').elements);
    Object.keys(document.getElementById('idForm').elements).forEach(e => {
      chatIdVal += document.getElementById('idForm').elements[e].value;

    })
    const inpObj = document.getElementById("idForm");

    if (inpObj.checkValidity()) {
      document.querySelector('.container').style.display = 'none'
      document.getElementById('goBack').style.display = 'block'
      // console.log(chatIdVal);
      document.querySelector('.cmd-container').style.display = "block";
      document.querySelector('#cmd-search').style.display = "block";

    } else {
      document.forms['idForm'].reportValidity();

    }

  })
  document.getElementById('goBack').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'block'
    document.getElementById('goBack').style.display = 'none';
    document.querySelector('.cmd-container').style.display = "none";
    document.querySelector('#cmd-search').style.display = "none";

  });