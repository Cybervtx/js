server:
	@http-server

push:
	@git add .
	@git commit -m 'code'
	@git push