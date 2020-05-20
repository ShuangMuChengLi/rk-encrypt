import { createHash } from "crypto";

function rkEncrypt(message, algorithm = 'md5'): string{
  const hash = createHash(algorithm);
  hash.update(message);
  return hash.digest('hex');
}
export default rkEncrypt;
