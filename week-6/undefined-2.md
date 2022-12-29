---
description: 파이어베이스 storage, aws s3 등의 클라우드 스토리지를 활용하여 이미지 및 파일 관리를 하는 방식에 대해 알아봅시다.
---

# 이미지, 파일 업로드를 위한 클라우드 스토리지 활용

* 서버에 바로 이미지 파일을 보내는 것이 아닌, **파이어베이스 storage / aws s3** 등의 이미지, 파일 등록 전용 스토리지를 거친 후 보내야한다.
* 서버에 이미지 파일을 바로 보내게 되면 서버의 용량에 굉장한 부하가 생기기때문에, 이미지(파일)을 전담해서 저장해주는 외부 서버를 이용해야한다.
* 구체적인 로직은 **파이어베이스/s3 등의 이미지 등록 전용 서버에 파일을 올리면** 거기서 파일을 저장시키고, 저장된 **url을 반환**해준다. 이 url을 서버에 전달주는 것이다.
* 결과적으로 서버는 실제 이미지 파일을 저장하는 것이 아닌 **이미지 주소만 저장**하고, 나중에 이 주소를 가지고 데이터를 보여주는 것.

참고자료 : [aws-sdk](https://www.npmjs.com/package/aws-sdk)

```jsx
// aws-sdk를 활용한 이미지 업로드 예시
AWS.config.update({
	region: REGION,
	accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
	params: { Bucket: ITEM_UPLOAD_S3_BUCKET },
	region: REGION,
});
```

```jsx
const s3ImgUpload = async (file, index, length) => {
		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: ITEM_UPLOAD_S3_BUCKET,
			Key: file.name,
			ContentType: 'image/jpeg',
		};

		myBucket
			.putObject(params)
			.on('httpUploadProgress', evt => {
				console.log(evt); 
			})
			.on('complete', evt => {
				console.log(evt.request.httpRequest.endpoint.host + evt.request.httpRequest.path);
			.send(err => {
				if (err) console.log(err);
			});
	};
```
