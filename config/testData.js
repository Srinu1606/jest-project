const base_url = "https://sn-leave.akriviahcm.io"
const authToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlZGMiOiJVMkZzZEdWa1gxODFROXVjejl0VEFyM1VweTRQaEgvUHEyTXoraURHTVExNm9MaHJ0MndtbUFLdSs3R3dWcW9jOUdES3dIN25LYzRlaHYzRnloYzNPOU5GcWxnL3ZQM1hDRGI5UXFxMHFDeWNUSGE3YWh1bU5ob2djSE1NeDJiU2o0R3NEalZ6UElNK0swQTNxNUdKaFZLbXI4YXh2N3VPZTM4K3I2NmtWaTN2eGg0TWhVeklkd096MUM1UmlJVXVtNW1lK0s5S0tJalI4bWZvVjdUTCtNNHJ1SmVvTU9oMmFXOU0vR1NKcUFydlZTUEt0M3JaZXJpOTNPWXp5RGRuc0tnOTNQREJpc1lmZ29MS0p2MVRZcWowaUFvZDJsZnhLamZ0b3ZrYlRCQ0ZXby9rT0dPcU5ZR2pqdmJMeGw2QXAxN3F4SUZtTi96bklkc0NkN0l4dW9QZHhDbWwrc1dacWZmWDVHdkE3NEZuTUV6OU1EUUxheDBPallZMzZ2ck9qQ1AvWUFoT1Vqa3NNZ1B2akRjd2ludTdUK25COTQ1bGJDMWMzZnhBT3g2T0hSQ201RnV6Y0xoeTJOVE1lSi9MSzRGUVJYbDBHZGlrbU1PN29SVWNGd0M0a2E1MUFGNkRsMFdkaENFaU5xSVZxNmp3TVdiL1E3QmNpeTRURTZQNG5Yekt0N1ZoRWYwK0xDa0FNTmFNb2ZPTlVwWFpOd1JBWmtwYlR1NHI4K1RoYi9pcnZ3R29vbnNQQnZEbWd1cnJHSHBXUVVFUGEyRGdlVzYyWkVTakVjOE51N3NMVlI4T2F5MDVLeHF1clgvUmd2SEdjUmc2dTlqYy85d0xBUkJxZ2pWT2lwUlRsenhaeHJZdHNDS3VnQ3pCYU1qYXNpVkpwamtRR0hKZ1gwK3BFZVpTMk93aG90cm5RdjYyclFnelJtcExiajZhZjhNQnhIelMwOFlROVljbjBSekd5WmxiV0c1eWc2VlRRblB0WUhKbjVBSHlqcEJsS1puY210VWk2d20rT2hibDJSZlhhUVNXWFpZY3hRQi9TUVhKV1NWb3ZCYklLR1dsWmVYeW9hbjByQVphUE55WXUrVStXM3hiem1oN2J0em5WMlFSajFDVDQyWkk2YVlsdWRHR1VYTnBXdWYwancvQ09oZ1NTeVRmV0VNclNncDF0Zll0NHBRUUg0OHZTUklZZXhtVmVwYVVqNzJCbDdBaXVna3hNRW0rZW9keHMzWlVSMVdKTXNzVUtqRkxhU1lQZnZTRU1PWEprcW1mbGJKVXpRd0JCR29wM2RVKzNLU0FVU2FPTXZGOU9USHlPdTRYVW9aalVSNmk4OGZxT3FRTm5OY2h6UGFOWGh4Z3ZDaWllaFBpVE1XcUcyNCtmSkc5UlVKZ0VsRHU1VGQ0SVc3RWJLZ0VGNFpCblJRakNROVR5Zk5RcHJYSjIya3lSYUFjbG0rZkpkNWdiNHdoYzcxajBOWVVOQXgvRzNhTDVTbGZxVElBYm4wNXJJY0Q4ZFBadXpYVjdqb2lQOGVaS0U5N0VVNEFaeXIwcTlRWnJ4T3V2akVrQSsvbG12STJQUC9HeEF3MmM5RWdheEIxZDA3dnM4d2lKci9PVmJIZGd6dFVIaXpXQTgrU1VmdllKOWNEeU9iWVBXM3BzeXZpYnVGUkRNTEYyUHF6SEhIb3BCL2RzZmZlbFhFUjlUZ0VzTU8vWjNaSldRajQrcEpIbnVpcEtsV3Q1U2twSUVQZlFIMFNQSHFTV0hGL1J5TkxTajJoWVJhSnZUd3dHSCtuejB5NjZtQ0F2TW5ZOXdQQ0NJZ04wZ3AyWjdBTG5wS0hLYnJJQU93ME5HVFNLSlRBMHVXOFYwWm1lOGZub21ZQ0RDTjdiUy9HaEUwK2hiZXVzQTBQaXIwUXI1MHhGL3JpS2dPT0FuWHd0R0pkWTlDRDl6OHRBWGpxQTd5RW1SVEJLbllYN0tDRGFqMjh4bVF1RjFkQ1lNdEdsVkpiWHI4K0RvM0taZnlFSUhPVTUzZFZ1cHVTSDUzbHd2U3BOeUJocFVRcm5HdXZvRmlucE9JOERSWEt6K05BMFU3aG1FMHdNbVJndWl0WkQ0M24xYzRrTUJIN2VwRVBCRGNKRzNFS2F0YUJkNFF2THBqc0hkT0xQdlc5bXFoSFlUK2RkVzgwdFlmZGhDQ2Y0VUVwSU9aYUM2d0FaSkxrRXlFY3hxSC9rQ0RQTExpYVIvMml1VXZOVlBKZUZrbTdKUFRHWlU1S3VRaGk5UVJkSEIvdnRUaFBxTjJNbDEwWTROb0VMRVRxeW5BNGhWRWxqc2RCS3BBd0FOT1VqZGZwZzk0QTB1V3QvLzBFRU9FV2dWaHJxWHM4WEFVSG1ObDh2akNsU3I4cit4QitWL0dFNDNiL1lwQnJrcFZqc1l5c3owN0wwL0oweGNlVFJpbz0iLCJpYXQiOjE3NDIzNzYyMzAsImV4cCI6MTc0MjQ2MjYzMH0.fgAJdW8vSCXXVOd8Oyc4MIhS97mU1JjAeRdiNY1Dy_DGCYLZ4YfcdD-KWV7fgz6LQsIHsRNWRZUethrskSwojw"
const endpoints = {
    name: `${base_url}`,
    auth : `Bearer ${authToken}`,
    API: "/holiday/all/v4",
  };
  module.exports = endpoints;
  