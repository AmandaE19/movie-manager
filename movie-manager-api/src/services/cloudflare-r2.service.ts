import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export class CloudflareR2Service {
  private s3Client: S3Client;
  private bucketName = process.env.CF_R2_BUCKET_NAME || "";

  constructor() {
    this.s3Client = new S3Client({
      region: "auto",
      endpoint: process.env.CF_R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.CF_R2_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.CF_R2_SECRET_ACCESS_KEY || "",
      },
    });
  }

  async uploadImage(key: string, body: Buffer, contentType: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: "public-read",
    });

    await this.s3Client.send(command);

    const fullUrl = `${process.env.IMAGES_BASE_BUCKET_URL}/${key}`;

    const urlToSave = fullUrl.replace('/movies-images', '');

    return urlToSave;
  }
}
