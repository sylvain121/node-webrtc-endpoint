const webrtc = require('../index');
const ffofferbase64 = "eyJ0eXBlIjoib2ZmZXIiLCJzZHAiOiJ2PTBcclxubz1tb3ppbGxhLi4uVEhJU19JU19TRFBBUlRBLTY4LjMuMCAzNTkwNzEzNzIyMDI0MDg4NDUwIDAgSU4gSVA0IDAuMC4wLjBcclxucz0tXHJcbnQ9MCAwXHJcbmE9c2VuZHJlY3ZcclxuYT1maW5nZXJwcmludDpzaGEtMjU2IDY5OkNGOjcxOkU3OjNEOjQzOjYwOkE1OjlBOkZCOjEwOjY0OjUyOkE1OkUwOkEwOjYzOjhCOjcxOkQ4Ojg5OjZCOjdBOjhEOjA0OjBBOjdEOkY4OjhFOkQ3OjUyOkJEXHJcbmE9Z3JvdXA6QlVORExFIDAgMSAyXHJcbmE9aWNlLW9wdGlvbnM6dHJpY2tsZVxyXG5hPW1zaWQtc2VtYW50aWM6V01TICpcclxubT1hdWRpbyA2MTEwMiBVRFAvVExTL1JUUC9TQVZQRiAxMDkgOSAwIDggMTAxXHJcbmM9SU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPWNhbmRpZGF0ZTowIDEgVURQIDIxMjIyNTI1NDMgMTkyLjE2OC4yMDQuMTg4IDYxMTAyIHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMSBUQ1AgMjEwNTUyNDQ3OSAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPWNhbmRpZGF0ZTowIDIgVURQIDIxMjIyNTI1NDIgMTkyLjE2OC4yMDQuMTg4IDYxMTAzIHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMiBUQ1AgMjEwNTUyNDQ3OCAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPXJlY3Zvbmx5XHJcbmE9ZXh0bWFwOjEgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6c3NyYy1hdWRpby1sZXZlbFxyXG5hPWV4dG1hcDoyL3JlY3Zvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OmNzcmMtYXVkaW8tbGV2ZWxcclxuYT1leHRtYXA6MyB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWZtdHA6MTA5IG1heHBsYXliYWNrcmF0ZT00ODAwMDtzdGVyZW89MTt1c2VpbmJhbmRmZWM9MVxyXG5hPWZtdHA6MTAxIDAtMTVcclxuYT1pY2UtcHdkOjNiZmM5MWZhNzcxYjI1NGU5MDQxYmZhOGRmZDkxM2MxXHJcbmE9aWNlLXVmcmFnOjI1NjkyMTMyXHJcbmE9bWlkOjBcclxuYT1ydGNwOjYxMTAzIElOIElQNCAxOTIuMTY4LjIwNC4xODhcclxuYT1ydGNwLW11eFxyXG5hPXJ0cG1hcDoxMDkgb3B1cy80ODAwMC8yXHJcbmE9cnRwbWFwOjkgRzcyMi84MDAwLzFcclxuYT1ydHBtYXA6MCBQQ01VLzgwMDBcclxuYT1ydHBtYXA6OCBQQ01BLzgwMDBcclxuYT1ydHBtYXA6MTAxIHRlbGVwaG9uZS1ldmVudC84MDAwXHJcbmE9c2V0dXA6YWN0cGFzc1xyXG5hPXNzcmM6MTAzNzI1NjE4IGNuYW1lOnthMzhmODc2ZS1mZDcxLTQxZWItYWU2OS1mNWIwNzUwNTYzYTZ9XHJcbm09dmlkZW8gNjExMDQgVURQL1RMUy9SVFAvU0FWUEYgMTIwIDEyMSAxMjYgOTdcclxuYz1JTiBJUDQgMTkyLjE2OC4yMDQuMTg4XHJcbmE9Y2FuZGlkYXRlOjAgMSBVRFAgMjEyMjI1MjU0MyAxOTIuMTY4LjIwNC4xODggNjExMDQgdHlwIGhvc3RcclxuYT1jYW5kaWRhdGU6MiAxIFRDUCAyMTA1NTI0NDc5IDE5Mi4xNjguMjA0LjE4OCA5IHR5cCBob3N0IHRjcHR5cGUgYWN0aXZlXHJcbmE9Y2FuZGlkYXRlOjAgMiBVRFAgMjEyMjI1MjU0MiAxOTIuMTY4LjIwNC4xODggNjExMDUgdHlwIGhvc3RcclxuYT1jYW5kaWRhdGU6MiAyIFRDUCAyMTA1NTI0NDc4IDE5Mi4xNjguMjA0LjE4OCA5IHR5cCBob3N0IHRjcHR5cGUgYWN0aXZlXHJcbmE9cmVjdm9ubHlcclxuYT1leHRtYXA6MyB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWV4dG1hcDo0IGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L2Ficy1zZW5kLXRpbWVcclxuYT1leHRtYXA6NSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XHJcbmE9Zm10cDoxMjYgcHJvZmlsZS1sZXZlbC1pZD00MmUwMWY7bGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MVxyXG5hPWZtdHA6OTcgcHJvZmlsZS1sZXZlbC1pZD00MmUwMWY7bGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MVxyXG5hPWZtdHA6MTIwIG1heC1mcz0xMjI4ODttYXgtZnI9NjBcclxuYT1mbXRwOjEyMSBtYXgtZnM9MTIyODg7bWF4LWZyPTYwXHJcbmE9aWNlLXB3ZDozYmZjOTFmYTc3MWIyNTRlOTA0MWJmYThkZmQ5MTNjMVxyXG5hPWljZS11ZnJhZzoyNTY5MjEzMlxyXG5hPW1pZDoxXHJcbmE9cnRjcDo2MTEwNSBJTiBJUDQgMTkyLjE2OC4yMDQuMTg4XHJcbmE9cnRjcC1mYjoxMjAgbmFja1xyXG5hPXJ0Y3AtZmI6MTIwIG5hY2sgcGxpXHJcbmE9cnRjcC1mYjoxMjAgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTIwIGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTIxIG5hY2tcclxuYT1ydGNwLWZiOjEyMSBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6MTIxIGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyMSBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEyNiBuYWNrXHJcbmE9cnRjcC1mYjoxMjYgbmFjayBwbGlcclxuYT1ydGNwLWZiOjEyNiBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjYgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjo5NyBuYWNrXHJcbmE9cnRjcC1mYjo5NyBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6OTcgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6OTcgZ29vZy1yZW1iXHJcbmE9cnRjcC1tdXhcclxuYT1ydHBtYXA6MTIwIFZQOC85MDAwMFxyXG5hPXJ0cG1hcDoxMjEgVlA5LzkwMDAwXHJcbmE9cnRwbWFwOjEyNiBIMjY0LzkwMDAwXHJcbmE9cnRwbWFwOjk3IEgyNjQvOTAwMDBcclxuYT1zZXR1cDphY3RwYXNzXHJcbmE9c3NyYzoxODk5NTg4NzI2IGNuYW1lOnthMzhmODc2ZS1mZDcxLTQxZWItYWU2OS1mNWIwNzUwNTYzYTZ9XHJcbm09dmlkZW8gMCBVRFAvVExTL1JUUC9TQVZQRiAxMjAgMTIxIDEyNiA5N1xyXG5jPUlOIElQNCAwLjAuMC4wXHJcbmE9YnVuZGxlLW9ubHlcclxuYT1yZWN2b25seVxyXG5hPWV4dG1hcDozIHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnNkZXM6bWlkXHJcbmE9ZXh0bWFwOjQgaHR0cDovL3d3dy53ZWJydGMub3JnL2V4cGVyaW1lbnRzL3J0cC1oZHJleHQvYWJzLXNlbmQtdGltZVxyXG5hPWV4dG1hcDo1IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcclxuYT1mbXRwOjEyNiBwcm9maWxlLWxldmVsLWlkPTQyZTAxZjtsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xXHJcbmE9Zm10cDo5NyBwcm9maWxlLWxldmVsLWlkPTQyZTAxZjtsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xXHJcbmE9Zm10cDoxMjAgbWF4LWZzPTEyMjg4O21heC1mcj02MFxyXG5hPWZtdHA6MTIxIG1heC1mcz0xMjI4ODttYXgtZnI9NjBcclxuYT1pY2UtcHdkOjNiZmM5MWZhNzcxYjI1NGU5MDQxYmZhOGRmZDkxM2MxXHJcbmE9aWNlLXVmcmFnOjI1NjkyMTMyXHJcbmE9bWlkOjJcclxuYT1ydGNwLWZiOjEyMCBuYWNrXHJcbmE9cnRjcC1mYjoxMjAgbmFjayBwbGlcclxuYT1ydGNwLWZiOjEyMCBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjAgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMjEgbmFja1xyXG5hPXJ0Y3AtZmI6MTIxIG5hY2sgcGxpXHJcbmE9cnRjcC1mYjoxMjEgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTIxIGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTI2IG5hY2tcclxuYT1ydGNwLWZiOjEyNiBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6MTI2IGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyNiBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjk3IG5hY2tcclxuYT1ydGNwLWZiOjk3IG5hY2sgcGxpXHJcbmE9cnRjcC1mYjo5NyBjY20gZmlyXHJcbmE9cnRjcC1mYjo5NyBnb29nLXJlbWJcclxuYT1ydGNwLW11eFxyXG5hPXJ0cG1hcDoxMjAgVlA4LzkwMDAwXHJcbmE9cnRwbWFwOjEyMSBWUDkvOTAwMDBcclxuYT1ydHBtYXA6MTI2IEgyNjQvOTAwMDBcclxuYT1ydHBtYXA6OTcgSDI2NC85MDAwMFxyXG5hPXNldHVwOmFjdHBhc3NcclxuYT1zc3JjOjM3OTcwMjY2MDggY25hbWU6e2EzOGY4NzZlLWZkNzEtNDFlYi1hZTY5LWY1YjA3NTA1NjNhNn1cclxuIn0=";
const chromeOfferbase64 = "eyJ0eXBlIjoib2ZmZXIiLCJzZHAiOiJ2PTBcclxubz0tIDc3OTcxODY1OTM3OTY0ODQ1ODEgMiBJTiBJUDQgMTI3LjAuMC4xXHJcbnM9LVxyXG50PTAgMFxyXG5hPWdyb3VwOkJVTkRMRSAwIDEgMlxyXG5hPW1zaWQtc2VtYW50aWM6IFdNU1xyXG5tPWF1ZGlvIDYwMTMyIFVEUC9UTFMvUlRQL1NBVlBGIDExMSAxMDMgMTA0IDkgMCA4IDEwNiAxMDUgMTMgMTEwIDExMiAxMTMgMTI2XHJcbmM9SU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxyXG5hPWNhbmRpZGF0ZToxMDQwNDQxNjAgMSB1ZHAgMjExMzkzNzE1MSAxOTIuMTY4LjIwNC4xODggNjAxMzIgdHlwIGhvc3QgZ2VuZXJhdGlvbiAwIG5ldHdvcmstY29zdCA5OTlcclxuYT1pY2UtdWZyYWc6dFdxalxyXG5hPWljZS1wd2Q6anV0Y2N1Vm1DaW1mQUQzRkZuU1VMbUh1XHJcbmE9aWNlLW9wdGlvbnM6dHJpY2tsZVxyXG5hPWZpbmdlcnByaW50OnNoYS0yNTYgNEI6MTk6OEQ6MkQ6NTY6QTc6QUM6MUE6MDE6QTk6QTU6OUY6NUQ6MTU6OUI6RTI6QTM6QTI6MTQ6MTU6OUE6MEI6OTM6Mzk6OEE6MTg6MEU6QUY6OEM6RjQ6NkE6MjJcclxuYT1zZXR1cDphY3RwYXNzXHJcbmE9bWlkOjBcclxuYT1leHRtYXA6MSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzc3JjLWF1ZGlvLWxldmVsXHJcbmE9ZXh0bWFwOjIgaHR0cDovL3d3dy53ZWJydGMub3JnL2V4cGVyaW1lbnRzL3J0cC1oZHJleHQvYWJzLXNlbmQtdGltZVxyXG5hPWV4dG1hcDozIGh0dHA6Ly93d3cuaWV0Zi5vcmcvaWQvZHJhZnQtaG9sbWVyLXJtY2F0LXRyYW5zcG9ydC13aWRlLWNjLWV4dGVuc2lvbnMtMDFcclxuYT1leHRtYXA6NCB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWV4dG1hcDo1IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnNkZXM6cnRwLXN0cmVhbS1pZFxyXG5hPWV4dG1hcDo2IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnNkZXM6cmVwYWlyZWQtcnRwLXN0cmVhbS1pZFxyXG5hPXJlY3Zvbmx5XHJcbmE9cnRjcC1tdXhcclxuYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxyXG5hPXJ0Y3AtZmI6MTExIHRyYW5zcG9ydC1jY1xyXG5hPWZtdHA6MTExIG1pbnB0aW1lPTEwO3VzZWluYmFuZGZlYz0xXHJcbmE9cnRwbWFwOjEwMyBJU0FDLzE2MDAwXHJcbmE9cnRwbWFwOjEwNCBJU0FDLzMyMDAwXHJcbmE9cnRwbWFwOjkgRzcyMi84MDAwXHJcbmE9cnRwbWFwOjAgUENNVS84MDAwXHJcbmE9cnRwbWFwOjggUENNQS84MDAwXHJcbmE9cnRwbWFwOjEwNiBDTi8zMjAwMFxyXG5hPXJ0cG1hcDoxMDUgQ04vMTYwMDBcclxuYT1ydHBtYXA6MTMgQ04vODAwMFxyXG5hPXJ0cG1hcDoxMTAgdGVsZXBob25lLWV2ZW50LzQ4MDAwXHJcbmE9cnRwbWFwOjExMiB0ZWxlcGhvbmUtZXZlbnQvMzIwMDBcclxuYT1ydHBtYXA6MTEzIHRlbGVwaG9uZS1ldmVudC8xNjAwMFxyXG5hPXJ0cG1hcDoxMjYgdGVsZXBob25lLWV2ZW50LzgwMDBcclxubT12aWRlbyA2MDEzNCBVRFAvVExTL1JUUC9TQVZQRiA5NiA5NyA5OCA5OSAxMDAgMTAxIDEwMiAxMjIgMTI3IDEyMSAxMjUgMTA3IDEwOCAxMDkgMTI0IDEyMCAxMjMgMTE5IDExNCAxMTUgMTE2XHJcbmM9SU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxyXG5hPWNhbmRpZGF0ZToxMDQwNDQxNjAgMSB1ZHAgMjExMzkzNzE1MSAxOTIuMTY4LjIwNC4xODggNjAxMzQgdHlwIGhvc3QgZ2VuZXJhdGlvbiAwIG5ldHdvcmstY29zdCA5OTlcclxuYT1pY2UtdWZyYWc6dFdxalxyXG5hPWljZS1wd2Q6anV0Y2N1Vm1DaW1mQUQzRkZuU1VMbUh1XHJcbmE9aWNlLW9wdGlvbnM6dHJpY2tsZVxyXG5hPWZpbmdlcnByaW50OnNoYS0yNTYgNEI6MTk6OEQ6MkQ6NTY6QTc6QUM6MUE6MDE6QTk6QTU6OUY6NUQ6MTU6OUI6RTI6QTM6QTI6MTQ6MTU6OUE6MEI6OTM6Mzk6OEE6MTg6MEU6QUY6OEM6RjQ6NkE6MjJcclxuYT1zZXR1cDphY3RwYXNzXHJcbmE9bWlkOjFcclxuYT1leHRtYXA6MTQgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6dG9mZnNldFxyXG5hPWV4dG1hcDoyIGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L2Ficy1zZW5kLXRpbWVcclxuYT1leHRtYXA6MTMgdXJuOjNncHA6dmlkZW8tb3JpZW50YXRpb25cclxuYT1leHRtYXA6MyBodHRwOi8vd3d3LmlldGYub3JnL2lkL2RyYWZ0LWhvbG1lci1ybWNhdC10cmFuc3BvcnQtd2lkZS1jYy1leHRlbnNpb25zLTAxXHJcbmE9ZXh0bWFwOjEyIGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L3BsYXlvdXQtZGVsYXlcclxuYT1leHRtYXA6MTEgaHR0cDovL3d3dy53ZWJydGMub3JnL2V4cGVyaW1lbnRzL3J0cC1oZHJleHQvdmlkZW8tY29udGVudC10eXBlXHJcbmE9ZXh0bWFwOjcgaHR0cDovL3d3dy53ZWJydGMub3JnL2V4cGVyaW1lbnRzL3J0cC1oZHJleHQvdmlkZW8tdGltaW5nXHJcbmE9ZXh0bWFwOjggaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1hdnRleHQtZnJhbWVtYXJraW5nLTA3XHJcbmE9ZXh0bWFwOjkgaHR0cDovL3d3dy53ZWJydGMub3JnL2V4cGVyaW1lbnRzL3J0cC1oZHJleHQvY29sb3Itc3BhY2VcclxuYT1leHRtYXA6NCB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWV4dG1hcDo1IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnNkZXM6cnRwLXN0cmVhbS1pZFxyXG5hPWV4dG1hcDo2IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnNkZXM6cmVwYWlyZWQtcnRwLXN0cmVhbS1pZFxyXG5hPXJlY3Zvbmx5XHJcbmE9cnRjcC1tdXhcclxuYT1ydGNwLXJzaXplXHJcbmE9cnRwbWFwOjk2IFZQOC85MDAwMFxyXG5hPXJ0Y3AtZmI6OTYgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjo5NiB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjk2IGNjbSBmaXJcclxuYT1ydGNwLWZiOjk2IG5hY2tcclxuYT1ydGNwLWZiOjk2IG5hY2sgcGxpXHJcbmE9cnRwbWFwOjk3IHJ0eC85MDAwMFxyXG5hPWZtdHA6OTcgYXB0PTk2XHJcbmE9cnRwbWFwOjk4IFZQOS85MDAwMFxyXG5hPXJ0Y3AtZmI6OTggZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjo5OCB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjk4IGNjbSBmaXJcclxuYT1ydGNwLWZiOjk4IG5hY2tcclxuYT1ydGNwLWZiOjk4IG5hY2sgcGxpXHJcbmE9Zm10cDo5OCBwcm9maWxlLWlkPTBcclxuYT1ydHBtYXA6OTkgcnR4LzkwMDAwXHJcbmE9Zm10cDo5OSBhcHQ9OThcclxuYT1ydHBtYXA6MTAwIFZQOS85MDAwMFxyXG5hPXJ0Y3AtZmI6MTAwIGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTAwIHRyYW5zcG9ydC1jY1xyXG5hPXJ0Y3AtZmI6MTAwIGNjbSBmaXJcclxuYT1ydGNwLWZiOjEwMCBuYWNrXHJcbmE9cnRjcC1mYjoxMDAgbmFjayBwbGlcclxuYT1mbXRwOjEwMCBwcm9maWxlLWlkPTJcclxuYT1ydHBtYXA6MTAxIHJ0eC85MDAwMFxyXG5hPWZtdHA6MTAxIGFwdD0xMDBcclxuYT1ydHBtYXA6MTAyIEgyNjQvOTAwMDBcclxuYT1ydGNwLWZiOjEwMiBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEwMiB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjEwMiBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMDIgbmFja1xyXG5hPXJ0Y3AtZmI6MTAyIG5hY2sgcGxpXHJcbmE9Zm10cDoxMDIgbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MTtwcm9maWxlLWxldmVsLWlkPTQyMDAxZlxyXG5hPXJ0cG1hcDoxMjIgcnR4LzkwMDAwXHJcbmE9Zm10cDoxMjIgYXB0PTEwMlxyXG5hPXJ0cG1hcDoxMjcgSDI2NC85MDAwMFxyXG5hPXJ0Y3AtZmI6MTI3IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTI3IHRyYW5zcG9ydC1jY1xyXG5hPXJ0Y3AtZmI6MTI3IGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyNyBuYWNrXHJcbmE9cnRjcC1mYjoxMjcgbmFjayBwbGlcclxuYT1mbXRwOjEyNyBsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0wO3Byb2ZpbGUtbGV2ZWwtaWQ9NDIwMDFmXHJcbmE9cnRwbWFwOjEyMSBydHgvOTAwMDBcclxuYT1mbXRwOjEyMSBhcHQ9MTI3XHJcbmE9cnRwbWFwOjEyNSBIMjY0LzkwMDAwXHJcbmE9cnRjcC1mYjoxMjUgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMjUgdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjoxMjUgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTI1IG5hY2tcclxuYT1ydGNwLWZiOjEyNSBuYWNrIHBsaVxyXG5hPWZtdHA6MTI1IGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTE7cGFja2V0aXphdGlvbi1tb2RlPTE7cHJvZmlsZS1sZXZlbC1pZD00MmUwMWZcclxuYT1ydHBtYXA6MTA3IHJ0eC85MDAwMFxyXG5hPWZtdHA6MTA3IGFwdD0xMjVcclxuYT1ydHBtYXA6MTA4IEgyNjQvOTAwMDBcclxuYT1ydGNwLWZiOjEwOCBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEwOCB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjEwOCBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMDggbmFja1xyXG5hPXJ0Y3AtZmI6MTA4IG5hY2sgcGxpXHJcbmE9Zm10cDoxMDggbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MDtwcm9maWxlLWxldmVsLWlkPTQyZTAxZlxyXG5hPXJ0cG1hcDoxMDkgcnR4LzkwMDAwXHJcbmE9Zm10cDoxMDkgYXB0PTEwOFxyXG5hPXJ0cG1hcDoxMjQgSDI2NC85MDAwMFxyXG5hPXJ0Y3AtZmI6MTI0IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTI0IHRyYW5zcG9ydC1jY1xyXG5hPXJ0Y3AtZmI6MTI0IGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyNCBuYWNrXHJcbmE9cnRjcC1mYjoxMjQgbmFjayBwbGlcclxuYT1mbXRwOjEyNCBsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xO3Byb2ZpbGUtbGV2ZWwtaWQ9NGQwMDMyXHJcbmE9cnRwbWFwOjEyMCBydHgvOTAwMDBcclxuYT1mbXRwOjEyMCBhcHQ9MTI0XHJcbmE9cnRwbWFwOjEyMyBIMjY0LzkwMDAwXHJcbmE9cnRjcC1mYjoxMjMgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMjMgdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjoxMjMgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTIzIG5hY2tcclxuYT1ydGNwLWZiOjEyMyBuYWNrIHBsaVxyXG5hPWZtdHA6MTIzIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTE7cGFja2V0aXphdGlvbi1tb2RlPTE7cHJvZmlsZS1sZXZlbC1pZD02NDAwMzJcclxuYT1ydHBtYXA6MTE5IHJ0eC85MDAwMFxyXG5hPWZtdHA6MTE5IGFwdD0xMjNcclxuYT1ydHBtYXA6MTE0IHJlZC85MDAwMFxyXG5hPXJ0cG1hcDoxMTUgcnR4LzkwMDAwXHJcbmE9Zm10cDoxMTUgYXB0PTExNFxyXG5hPXJ0cG1hcDoxMTYgdWxwZmVjLzkwMDAwXHJcbm09dmlkZW8gNjAxMzYgVURQL1RMUy9SVFAvU0FWUEYgOTYgOTcgOTggOTkgMTAwIDEwMSAxMDIgMTIyIDEyNyAxMjEgMTI1IDEwNyAxMDggMTA5IDEyNCAxMjAgMTIzIDExOSAxMTQgMTE1IDExNlxyXG5jPUlOIElQNCAxOTIuMTY4LjIwNC4xODhcclxuYT1ydGNwOjkgSU4gSVA0IDAuMC4wLjBcclxuYT1jYW5kaWRhdGU6MTA0MDQ0MTYwIDEgdWRwIDIxMTM5MzcxNTEgMTkyLjE2OC4yMDQuMTg4IDYwMTM2IHR5cCBob3N0IGdlbmVyYXRpb24gMCBuZXR3b3JrLWNvc3QgOTk5XHJcbmE9aWNlLXVmcmFnOnRXcWpcclxuYT1pY2UtcHdkOmp1dGNjdVZtQ2ltZkFEM0ZGblNVTG1IdVxyXG5hPWljZS1vcHRpb25zOnRyaWNrbGVcclxuYT1maW5nZXJwcmludDpzaGEtMjU2IDRCOjE5OjhEOjJEOjU2OkE3OkFDOjFBOjAxOkE5OkE1OjlGOjVEOjE1OjlCOkUyOkEzOkEyOjE0OjE1OjlBOjBCOjkzOjM5OjhBOjE4OjBFOkFGOjhDOkY0OjZBOjIyXHJcbmE9c2V0dXA6YWN0cGFzc1xyXG5hPW1pZDoyXHJcbmE9ZXh0bWFwOjE0IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcclxuYT1leHRtYXA6MiBodHRwOi8vd3d3LndlYnJ0Yy5vcmcvZXhwZXJpbWVudHMvcnRwLWhkcmV4dC9hYnMtc2VuZC10aW1lXHJcbmE9ZXh0bWFwOjEzIHVybjozZ3BwOnZpZGVvLW9yaWVudGF0aW9uXHJcbmE9ZXh0bWFwOjMgaHR0cDovL3d3dy5pZXRmLm9yZy9pZC9kcmFmdC1ob2xtZXItcm1jYXQtdHJhbnNwb3J0LXdpZGUtY2MtZXh0ZW5zaW9ucy0wMVxyXG5hPWV4dG1hcDoxMiBodHRwOi8vd3d3LndlYnJ0Yy5vcmcvZXhwZXJpbWVudHMvcnRwLWhkcmV4dC9wbGF5b3V0LWRlbGF5XHJcbmE9ZXh0bWFwOjExIGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L3ZpZGVvLWNvbnRlbnQtdHlwZVxyXG5hPWV4dG1hcDo3IGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L3ZpZGVvLXRpbWluZ1xyXG5hPWV4dG1hcDo4IGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtYXZ0ZXh0LWZyYW1lbWFya2luZy0wN1xyXG5hPWV4dG1hcDo5IGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L2NvbG9yLXNwYWNlXHJcbmE9ZXh0bWFwOjQgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6c2RlczptaWRcclxuYT1leHRtYXA6NSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOnJ0cC1zdHJlYW0taWRcclxuYT1leHRtYXA6NiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOnJlcGFpcmVkLXJ0cC1zdHJlYW0taWRcclxuYT1yZWN2b25seVxyXG5hPXJ0Y3AtbXV4XHJcbmE9cnRjcC1yc2l6ZVxyXG5hPXJ0cG1hcDo5NiBWUDgvOTAwMDBcclxuYT1ydGNwLWZiOjk2IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6OTYgdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjo5NiBjY20gZmlyXHJcbmE9cnRjcC1mYjo5NiBuYWNrXHJcbmE9cnRjcC1mYjo5NiBuYWNrIHBsaVxyXG5hPXJ0cG1hcDo5NyBydHgvOTAwMDBcclxuYT1mbXRwOjk3IGFwdD05NlxyXG5hPXJ0cG1hcDo5OCBWUDkvOTAwMDBcclxuYT1ydGNwLWZiOjk4IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6OTggdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjo5OCBjY20gZmlyXHJcbmE9cnRjcC1mYjo5OCBuYWNrXHJcbmE9cnRjcC1mYjo5OCBuYWNrIHBsaVxyXG5hPWZtdHA6OTggcHJvZmlsZS1pZD0wXHJcbmE9cnRwbWFwOjk5IHJ0eC85MDAwMFxyXG5hPWZtdHA6OTkgYXB0PTk4XHJcbmE9cnRwbWFwOjEwMCBWUDkvOTAwMDBcclxuYT1ydGNwLWZiOjEwMCBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEwMCB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjEwMCBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMDAgbmFja1xyXG5hPXJ0Y3AtZmI6MTAwIG5hY2sgcGxpXHJcbmE9Zm10cDoxMDAgcHJvZmlsZS1pZD0yXHJcbmE9cnRwbWFwOjEwMSBydHgvOTAwMDBcclxuYT1mbXRwOjEwMSBhcHQ9MTAwXHJcbmE9cnRwbWFwOjEwMiBIMjY0LzkwMDAwXHJcbmE9cnRjcC1mYjoxMDIgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMDIgdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjoxMDIgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTAyIG5hY2tcclxuYT1ydGNwLWZiOjEwMiBuYWNrIHBsaVxyXG5hPWZtdHA6MTAyIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTE7cGFja2V0aXphdGlvbi1tb2RlPTE7cHJvZmlsZS1sZXZlbC1pZD00MjAwMWZcclxuYT1ydHBtYXA6MTIyIHJ0eC85MDAwMFxyXG5hPWZtdHA6MTIyIGFwdD0xMDJcclxuYT1ydHBtYXA6MTI3IEgyNjQvOTAwMDBcclxuYT1ydGNwLWZiOjEyNyBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEyNyB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjEyNyBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjcgbmFja1xyXG5hPXJ0Y3AtZmI6MTI3IG5hY2sgcGxpXHJcbmE9Zm10cDoxMjcgbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MDtwcm9maWxlLWxldmVsLWlkPTQyMDAxZlxyXG5hPXJ0cG1hcDoxMjEgcnR4LzkwMDAwXHJcbmE9Zm10cDoxMjEgYXB0PTEyN1xyXG5hPXJ0cG1hcDoxMjUgSDI2NC85MDAwMFxyXG5hPXJ0Y3AtZmI6MTI1IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTI1IHRyYW5zcG9ydC1jY1xyXG5hPXJ0Y3AtZmI6MTI1IGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyNSBuYWNrXHJcbmE9cnRjcC1mYjoxMjUgbmFjayBwbGlcclxuYT1mbXRwOjEyNSBsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xO3Byb2ZpbGUtbGV2ZWwtaWQ9NDJlMDFmXHJcbmE9cnRwbWFwOjEwNyBydHgvOTAwMDBcclxuYT1mbXRwOjEwNyBhcHQ9MTI1XHJcbmE9cnRwbWFwOjEwOCBIMjY0LzkwMDAwXHJcbmE9cnRjcC1mYjoxMDggZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMDggdHJhbnNwb3J0LWNjXHJcbmE9cnRjcC1mYjoxMDggY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTA4IG5hY2tcclxuYT1ydGNwLWZiOjEwOCBuYWNrIHBsaVxyXG5hPWZtdHA6MTA4IGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTE7cGFja2V0aXphdGlvbi1tb2RlPTA7cHJvZmlsZS1sZXZlbC1pZD00MmUwMWZcclxuYT1ydHBtYXA6MTA5IHJ0eC85MDAwMFxyXG5hPWZtdHA6MTA5IGFwdD0xMDhcclxuYT1ydHBtYXA6MTI0IEgyNjQvOTAwMDBcclxuYT1ydGNwLWZiOjEyNCBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEyNCB0cmFuc3BvcnQtY2NcclxuYT1ydGNwLWZiOjEyNCBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjQgbmFja1xyXG5hPXJ0Y3AtZmI6MTI0IG5hY2sgcGxpXHJcbmE9Zm10cDoxMjQgbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MTtwcm9maWxlLWxldmVsLWlkPTRkMDAzMlxyXG5hPXJ0cG1hcDoxMjAgcnR4LzkwMDAwXHJcbmE9Zm10cDoxMjAgYXB0PTEyNFxyXG5hPXJ0cG1hcDoxMjMgSDI2NC85MDAwMFxyXG5hPXJ0Y3AtZmI6MTIzIGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTIzIHRyYW5zcG9ydC1jY1xyXG5hPXJ0Y3AtZmI6MTIzIGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyMyBuYWNrXHJcbmE9cnRjcC1mYjoxMjMgbmFjayBwbGlcclxuYT1mbXRwOjEyMyBsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xO3Byb2ZpbGUtbGV2ZWwtaWQ9NjQwMDMyXHJcbmE9cnRwbWFwOjExOSBydHgvOTAwMDBcclxuYT1mbXRwOjExOSBhcHQ9MTIzXHJcbmE9cnRwbWFwOjExNCByZWQvOTAwMDBcclxuYT1ydHBtYXA6MTE1IHJ0eC85MDAwMFxyXG5hPWZtdHA6MTE1IGFwdD0xMTRcclxuYT1ydHBtYXA6MTE2IHVscGZlYy85MDAwMFxyXG4ifQ==";
const test = "eyJ0eXBlIjoib2ZmZXIiLCJzZHAiOiJ2PTBcclxubz1tb3ppbGxhLi4uVEhJU19JU19TRFBBUlRBLTY4LjQuMiA3NjgwODIxMjYxNDEwNDk3MzI5IDAgSU4gSVA0IDAuMC4wLjBcclxucz0tXHJcbnQ9MCAwXHJcbmE9c2VuZHJlY3ZcclxuYT1maW5nZXJwcmludDpzaGEtMjU2IDQ1OkNCOkQ4OkUzOkNGOjlEOjk1OjY4OjZEOkZDOjI2OjJFOkQ4OjUzOkFBOjI5OjkwOjVBOjVDOjk4Ojc0OkU0OjNGOkQ0OjBBOjcwOkJBOjQxOjVEOkRDOjQzOjVDXHJcbmE9Z3JvdXA6QlVORExFIDAgMSAyXHJcbmE9aWNlLW9wdGlvbnM6dHJpY2tsZVxyXG5hPW1zaWQtc2VtYW50aWM6V01TICpcclxubT1hdWRpbyA2MzA2NiBVRFAvVExTL1JUUC9TQVZQRiAxMDkgOSAwIDggMTAxXHJcbmM9SU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPWNhbmRpZGF0ZTowIDEgVURQIDIxMjIyNTI1NDMgMTkyLjE2OC4yMDQuMTg4IDYzMDY2IHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMSBUQ1AgMjEwNTUyNDQ3OSAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPWNhbmRpZGF0ZTowIDIgVURQIDIxMjIyNTI1NDIgMTkyLjE2OC4yMDQuMTg4IDYzMDY3IHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMiBUQ1AgMjEwNTUyNDQ3OCAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPXJlY3Zvbmx5XHJcbmE9ZXh0bWFwOjEgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6c3NyYy1hdWRpby1sZXZlbFxyXG5hPWV4dG1hcDoyL3JlY3Zvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OmNzcmMtYXVkaW8tbGV2ZWxcclxuYT1leHRtYXA6MyB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWZtdHA6MTA5IG1heHBsYXliYWNrcmF0ZT00ODAwMDtzdGVyZW89MTt1c2VpbmJhbmRmZWM9MVxyXG5hPWZtdHA6MTAxIDAtMTVcclxuYT1pY2UtcHdkOjBiYzNhYjNhNzBjMWE5NzhlZmQ0YTllN2E1YjhhMTg3XHJcbmE9aWNlLXVmcmFnOjRjMDNmNzA0XHJcbmE9bWlkOjBcclxuYT1ydGNwOjYzMDY3IElOIElQNCAxOTIuMTY4LjIwNC4xODhcclxuYT1ydGNwLW11eFxyXG5hPXJ0cG1hcDoxMDkgb3B1cy80ODAwMC8yXHJcbmE9cnRwbWFwOjkgRzcyMi84MDAwLzFcclxuYT1ydHBtYXA6MCBQQ01VLzgwMDBcclxuYT1ydHBtYXA6OCBQQ01BLzgwMDBcclxuYT1ydHBtYXA6MTAxIHRlbGVwaG9uZS1ldmVudC84MDAwXHJcbmE9c2V0dXA6YWN0cGFzc1xyXG5hPXNzcmM6MTM1NzU5ODI0MSBjbmFtZTp7NTdhNDM3MzQtY2I1YS00MzYzLTlhYjUtMzc1YjhkMDg3NWJmfVxyXG5tPXZpZGVvIDYzMDY4IFVEUC9UTFMvUlRQL1NBVlBGIDEyMCAxMjEgMTI2IDk3XHJcbmM9SU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPWNhbmRpZGF0ZTowIDEgVURQIDIxMjIyNTI1NDMgMTkyLjE2OC4yMDQuMTg4IDYzMDY4IHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMSBUQ1AgMjEwNTUyNDQ3OSAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPWNhbmRpZGF0ZTowIDIgVURQIDIxMjIyNTI1NDIgMTkyLjE2OC4yMDQuMTg4IDYzMDY5IHR5cCBob3N0XHJcbmE9Y2FuZGlkYXRlOjIgMiBUQ1AgMjEwNTUyNDQ3OCAxOTIuMTY4LjIwNC4xODggOSB0eXAgaG9zdCB0Y3B0eXBlIGFjdGl2ZVxyXG5hPXJlY3Zvbmx5XHJcbmE9ZXh0bWFwOjMgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6c2RlczptaWRcclxuYT1leHRtYXA6NCBodHRwOi8vd3d3LndlYnJ0Yy5vcmcvZXhwZXJpbWVudHMvcnRwLWhkcmV4dC9hYnMtc2VuZC10aW1lXHJcbmE9ZXh0bWFwOjUgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6dG9mZnNldFxyXG5hPWZtdHA6MTI2IHByb2ZpbGUtbGV2ZWwtaWQ9NDJlMDFmO2xldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTE7cGFja2V0aXphdGlvbi1tb2RlPTFcclxuYT1mbXRwOjk3IHByb2ZpbGUtbGV2ZWwtaWQ9NDJlMDFmO2xldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcclxuYT1mbXRwOjEyMCBtYXgtZnM9MTIyODg7bWF4LWZyPTYwXHJcbmE9Zm10cDoxMjEgbWF4LWZzPTEyMjg4O21heC1mcj02MFxyXG5hPWljZS1wd2Q6MGJjM2FiM2E3MGMxYTk3OGVmZDRhOWU3YTViOGExODdcclxuYT1pY2UtdWZyYWc6NGMwM2Y3MDRcclxuYT1taWQ6MVxyXG5hPXJ0Y3A6NjMwNjkgSU4gSVA0IDE5Mi4xNjguMjA0LjE4OFxyXG5hPXJ0Y3AtZmI6MTIwIG5hY2tcclxuYT1ydGNwLWZiOjEyMCBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6MTIwIGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyMCBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEyMSBuYWNrXHJcbmE9cnRjcC1mYjoxMjEgbmFjayBwbGlcclxuYT1ydGNwLWZiOjEyMSBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjEgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjoxMjYgbmFja1xyXG5hPXJ0Y3AtZmI6MTI2IG5hY2sgcGxpXHJcbmE9cnRjcC1mYjoxMjYgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTI2IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6OTcgbmFja1xyXG5hPXJ0Y3AtZmI6OTcgbmFjayBwbGlcclxuYT1ydGNwLWZiOjk3IGNjbSBmaXJcclxuYT1ydGNwLWZiOjk3IGdvb2ctcmVtYlxyXG5hPXJ0Y3AtbXV4XHJcbmE9cnRwbWFwOjEyMCBWUDgvOTAwMDBcclxuYT1ydHBtYXA6MTIxIFZQOS85MDAwMFxyXG5hPXJ0cG1hcDoxMjYgSDI2NC85MDAwMFxyXG5hPXJ0cG1hcDo5NyBIMjY0LzkwMDAwXHJcbmE9c2V0dXA6YWN0cGFzc1xyXG5hPXNzcmM6MTQ0NzIyNDMwNCBjbmFtZTp7NTdhNDM3MzQtY2I1YS00MzYzLTlhYjUtMzc1YjhkMDg3NWJmfVxyXG5tPXZpZGVvIDAgVURQL1RMUy9SVFAvU0FWUEYgMTIwIDEyMSAxMjYgOTdcclxuYz1JTiBJUDQgMC4wLjAuMFxyXG5hPWJ1bmRsZS1vbmx5XHJcbmE9cmVjdm9ubHlcclxuYT1leHRtYXA6MyB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDpzZGVzOm1pZFxyXG5hPWV4dG1hcDo0IGh0dHA6Ly93d3cud2VicnRjLm9yZy9leHBlcmltZW50cy9ydHAtaGRyZXh0L2Ficy1zZW5kLXRpbWVcclxuYT1leHRtYXA6NSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XHJcbmE9Zm10cDoxMjYgcHJvZmlsZS1sZXZlbC1pZD00MmUwMWY7bGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MTtwYWNrZXRpemF0aW9uLW1vZGU9MVxyXG5hPWZtdHA6OTcgcHJvZmlsZS1sZXZlbC1pZD00MmUwMWY7bGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MVxyXG5hPWZtdHA6MTIwIG1heC1mcz0xMjI4ODttYXgtZnI9NjBcclxuYT1mbXRwOjEyMSBtYXgtZnM9MTIyODg7bWF4LWZyPTYwXHJcbmE9aWNlLXB3ZDowYmMzYWIzYTcwYzFhOTc4ZWZkNGE5ZTdhNWI4YTE4N1xyXG5hPWljZS11ZnJhZzo0YzAzZjcwNFxyXG5hPW1pZDoyXHJcbmE9cnRjcC1mYjoxMjAgbmFja1xyXG5hPXJ0Y3AtZmI6MTIwIG5hY2sgcGxpXHJcbmE9cnRjcC1mYjoxMjAgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6MTIwIGdvb2ctcmVtYlxyXG5hPXJ0Y3AtZmI6MTIxIG5hY2tcclxuYT1ydGNwLWZiOjEyMSBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6MTIxIGNjbSBmaXJcclxuYT1ydGNwLWZiOjEyMSBnb29nLXJlbWJcclxuYT1ydGNwLWZiOjEyNiBuYWNrXHJcbmE9cnRjcC1mYjoxMjYgbmFjayBwbGlcclxuYT1ydGNwLWZiOjEyNiBjY20gZmlyXHJcbmE9cnRjcC1mYjoxMjYgZ29vZy1yZW1iXHJcbmE9cnRjcC1mYjo5NyBuYWNrXHJcbmE9cnRjcC1mYjo5NyBuYWNrIHBsaVxyXG5hPXJ0Y3AtZmI6OTcgY2NtIGZpclxyXG5hPXJ0Y3AtZmI6OTcgZ29vZy1yZW1iXHJcbmE9cnRjcC1tdXhcclxuYT1ydHBtYXA6MTIwIFZQOC85MDAwMFxyXG5hPXJ0cG1hcDoxMjEgVlA5LzkwMDAwXHJcbmE9cnRwbWFwOjEyNiBIMjY0LzkwMDAwXHJcbmE9cnRwbWFwOjk3IEgyNjQvOTAwMDBcclxuYT1zZXR1cDphY3RwYXNzXHJcbmE9c3NyYzo4MzQxOTI4MzggY25hbWU6ezU3YTQzNzM0LWNiNWEtNDM2My05YWI1LTM3NWI4ZDA4NzViZn1cclxuIn0=";
let offer = JSON.parse(new Buffer(test, 'base64').toString());

console.log("BROWER OFFER");
console.log(offer);
const localOffer = webrtc.init(offer,
    msg => console.log(`command msg : ${msg}`),
    msg => console.log(`control msg : ${msg}`),
    msg => console.log(`info msg : ${msg}`));

console.log("LOCAL OFFER");
console.log(localOffer);

const rawData = require('fs').readFileSync(__dirname + "/output.h264.raw");
webrtc.writeFrame(rawData);

