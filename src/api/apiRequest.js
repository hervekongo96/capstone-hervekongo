import { useState, useEffect } from 'react';


const url_base = 'https://capstone2-c2-hervekongo96.onrender.com/';
const url_work_publish = 'all/publish';
const url_create_compte_apprenant = 'auth-apprenant/register';
const url_create_compte_admin = 'compteAdmin/register';
const url_all_oeuvres_from_apprenant = 'api/all-oeuvres';
const url_all_compte ='api/all-comptes';
const url_all_oeuvres_by_apprenant = 'api/oeuvres';
const url_publication_oeuvre_by_apprenant = 'work/publish-work';
const url_publication_oeuvre_by_admin = 'work/publishadmin';
const url_all_publish = 'all/publish';
const url_delete_publication = 'oeuvrespublish'


const fetchAllData = () => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${url_base}${url_all_publish}`);
        if (!response.ok) {
          throw new Error("Erreur HTTP: " + response.status);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Il y a eu un problème avec votre fetch opération: ', error);
      }
    };
    getData();
  }, []); 

  return data;
};

const fetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${url_base}${url_work_publish}`);
        if (!response.ok) {
          throw new Error("Erreur HTTP: " + response.status);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Il y a eu un problème avec votre fetch opération: ', error);
      }
    };
    getData();
  }, []); 

  return data;
};


const createCompteApprenant = (newCompte, navigate) => {
  fetch(`${url_base}${url_create_compte_apprenant}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCompte),
  })
    .then(response => response.json())
    .then(data => {
      console.log('reponse du serveur :', data);
      alert(`Réponse du server : ${data.message}`);
      navigate('/sign-in');
    })
    .catch(error => {
      console.error('Erreur lors de la création du compte :', error);
      alert('Une erreur est survenue lors de la création du compte. Veuillez réessayer.');
    });
};


const createCompteAdmin = (newCompte) => {
  fetch(`${url_base}${url_create_compte_admin}`, {
    method: 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(newCompte),
  })
  .then(response => response.json())
  .then(data => {
    console.log('reponse du serveur :', data);
    alert(`Réponse du server : ${data.message}`);
  })
}

const getAllOeuvrsFromApprenant = async (token) => {
  try {
    const response = await fetch(`${url_base}${url_all_oeuvres_from_apprenant}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.status === 200) {
        const errorData = await response.json();
        alert(`Erreur! status: ${response.status}, message: ${errorData.message}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const data = await response.json();
        return data;
    }
  } catch (error) {
    console.log(error);
  }
} 

const getAllCompte = async (token) => {
  try {
    const response = await fetch(`${url_base}${url_all_compte}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.status === 200) {
        const errorData = await response.json();
        alert(`Erreur! status: ${response.status}, message: ${errorData.message}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const data = await response.json();
        return data
    }
  } catch (error) {
    console.log(error);
  }
}

const getWorkByApprenant = async (token) => {
  try {
    const response = await fetch(`${url_base}${url_all_oeuvres_by_apprenant}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.status === 200) {
        const errorData = await response.json();
        alert(`Erreur! status: ${response.status}, message: ${errorData.message}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const data = await response.json();
        return data
    }
  } catch (error) {
    console.log(error);
  }
}

const publicationOevreByApprenant = (newOeuvre, token) => {
  fetch(`${url_base}${url_publication_oeuvre_by_apprenant}`, {
    method: 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
    body: JSON.stringify(newOeuvre),
  })
  .then(response => response.json())
  .then(data => {
    alert(`Réponse du server : ${data.message}`);
  })
}

const publicationOevreByAdmin = (newOeuvre, token) => {

  console.log("url", `${url_base}${url_publication_oeuvre_by_admin}`);
  fetch(`${url_base}${url_publication_oeuvre_by_admin}`, {
    method: 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
    body: JSON.stringify(newOeuvre),
  })
  .then(response => response.json())
  .then(data => {
    alert(`Réponse du server : ${data.message}`);
  })
}

const deletePublication = (oeuvreId, token) => {
  fetch(`${url_base}${url_delete_publication}/${oeuvreId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(data => {
    alert(`Réponse du serveur : ${data.message}`);
  })
  .catch(error => {
    console.error('Erreur lors de la suppression de l\'oeuvre :', error);
    alert('Une erreur est survenue lors de la suppression de l\'oeuvre.');
  });
};



export {
  fetchAllData,
  fetchData, 
  createCompteApprenant, 
  createCompteAdmin, 
  getAllOeuvrsFromApprenant,
  getAllCompte,
  getWorkByApprenant,
  publicationOevreByApprenant,
  publicationOevreByAdmin,
  deletePublication
};
