export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    chinaDownload.then((china) => {
      resolve(china);
    });
    USDownload.then((US) => {
      resolve(US);
    });
  });
}
