import axios from "axios";

export const getAllMovies = () => {
  return (
    axios
      .get("http://127.0.0.1:8000/movies/", {
        headers: {
          "Content-Type": "application/json",
          // Include the token in the Authorization header
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwOWY4ZTMzN2ZjNzg1NTE0ZTExMGM2ZDg0N2Y0M2M3NDM1M2U0YWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZjb20tZWYxYTIiLCJhdWQiOiJtdmNvbS1lZjFhMiIsImF1dGhfdGltZSI6MTcxMDM5Mzc1MCwidXNlcl9pZCI6IkxLSUU2QzYwRVVNMFBqU0VIRXI1S2FKZTBuMzIiLCJzdWIiOiJMS0lFNkM2MEVVTTBQalNFSEVyNUthSmUwbjMyIiwiaWF0IjoxNzEwMzkzNzUwLCJleHAiOjE3MTAzOTczNTAsImVtYWlsIjoidXNlcjFAYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXIxQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GemO2U-NNu868lllfFRpX_YkdiBK22OUWtB77u-dNtVCnFsubUG0oL9chb4ofDyrqx2-_YbrvxrtOKvIyO-2QXmsn7TFw4b7iZ-wZxDiVV-cWtf6vaeQW9J36SG6jUs-a6cVvK3JiCQ0Kxm8Xs2SEaN6oh58xYMyZHUtW6xhnEz3kQVRH2a_P6Jos7pBxLOiCgF2r3XbrOGzn31nSdY8_u87tWZRS7H2mPEVLPjrwUQocDjLIFDN-Qpt5ekcJl_pDOmU6yyEArBjcWjD1EFg9w34tF3A8S6R3a9pKPFT00VdHJGZW36KFXN16mB3DxDbG_W7Ne97w7o6-obSUIOjFw`, //El token va despues del bearer y un espacio
        },
      })
      // .then(function (response) {
      //   console.log(response.data);
      // })
      .catch(function (error) {
        console.log(error);
      })
  );
};
