export default {
    "name": "Seismology-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2021-02-16T11:55:37.935262",
    "schemaVersion": "1.0",
    "author": {
        "name": "cloud",
        "email": "support@workflowhub.org"
    },
    "wms": {
        "name": "WorkflowHub",
        "version": "0.4",
        "url": "https://workflowhub.readthedocs.io/en/v0.4/"
    },
    "workflow": {
        "executedAt": "20210216T135537+0200",
        "makespan": null,
        "jobs": [
            {
                "name": "sG1IterDecon_00000001",
                "type": "compute",
                "runtime": 3.76,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "512590a4-e4f1-4b43-aecd-b6d26e7fa57c.lht",
                        "size": 16992
                    },
                    {
                        "link": "input",
                        "name": "13ff41e4-e2ab-4970-9680-59c6da7f84d3.lht",
                        "size": 14848
                    },
                    {
                        "link": "output",
                        "name": "a444c168-c28c-4b68-9fec-70e44ce34590.stf",
                        "size": 1701
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000002",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "8265dc8a-cbf0-4301-bb08-d60902911bc5.lht",
                        "size": 13143
                    },
                    {
                        "link": "input",
                        "name": "7168e88b-38ae-471c-af7f-d469bc7b5ecf.lht",
                        "size": 12201
                    },
                    {
                        "link": "output",
                        "name": "6292fdb7-9007-4895-bed4-bcf8a9d49e8b.stf",
                        "size": 5527
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000003",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36b2f961-8a9d-4369-8d4e-be49b69a9530.lht",
                        "size": 16909
                    },
                    {
                        "link": "input",
                        "name": "fa00e252-cd33-4c3c-9518-f708b957dbee.lht",
                        "size": 16243
                    },
                    {
                        "link": "output",
                        "name": "ed9e9aaf-0dce-4634-88ae-5cba411b875b.stf",
                        "size": 13083
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000004",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "db31be4e-b174-4250-a360-61ecdc7d355d.lht",
                        "size": 14605
                    },
                    {
                        "link": "input",
                        "name": "572bd4b2-d3b3-44be-a4d0-5f6b873675a1.lht",
                        "size": 14645
                    },
                    {
                        "link": "output",
                        "name": "b337994c-ecd5-4b2a-a66e-fc4e00cb98dc.stf",
                        "size": 12909
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000005",
                "type": "compute",
                "runtime": 1.736,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "63edb366-aaf3-40aa-bf09-7d8512f0ad67.lht",
                        "size": 7170
                    },
                    {
                        "link": "input",
                        "name": "f34b467f-7b39-4546-809d-4559e5cb7c40.lht",
                        "size": 17011
                    },
                    {
                        "link": "output",
                        "name": "5c7fb732-b18a-4b64-91ac-c14280a4bc58.stf",
                        "size": 15280
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000006",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b47f424a-950f-450b-86c9-35bb23d2cb84.lht",
                        "size": 9388
                    },
                    {
                        "link": "input",
                        "name": "5a6accdc-c6fc-477f-90c7-3fad04586002.lht",
                        "size": 10183
                    },
                    {
                        "link": "output",
                        "name": "039da024-9276-497d-b90b-2e950f4c9d36.stf",
                        "size": 11936
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000007",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "cb60b21a-e3ef-456d-9cca-b9fcd929f584.lht",
                        "size": 11143
                    },
                    {
                        "link": "input",
                        "name": "fdc445ae-1d19-40ea-b5d4-09ab26f971e1.lht",
                        "size": 5856
                    },
                    {
                        "link": "output",
                        "name": "447dc099-6efa-4be5-9fb3-2c02559626e4.stf",
                        "size": 16178
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000008",
                "type": "compute",
                "runtime": 3.679,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b13b6540-c17d-4c76-a148-edf6d947dc2b.lht",
                        "size": 8630
                    },
                    {
                        "link": "input",
                        "name": "7d987357-52cb-46a5-b446-e610f5f2d61c.lht",
                        "size": 2568
                    },
                    {
                        "link": "output",
                        "name": "9a6c3029-3587-488b-8cd7-99f98b5af5a4.stf",
                        "size": 15100
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000009",
                "type": "compute",
                "runtime": 2.778,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1969c0f2-f81c-45b5-bf17-909a2ff62f3c.lht",
                        "size": 16612
                    },
                    {
                        "link": "input",
                        "name": "794f8ad3-bf2f-4a13-a563-e4622c6de430.lht",
                        "size": 11087
                    },
                    {
                        "link": "output",
                        "name": "c0f7bd86-7110-4ae5-ab28-d06a1096e2c7.stf",
                        "size": 12113
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000010",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "67a1b864-4531-4183-8be1-22fd75652b81.lht",
                        "size": 10880
                    },
                    {
                        "link": "input",
                        "name": "fed64d66-824d-4de2-9aba-fbcbd30b11be.lht",
                        "size": 16579
                    },
                    {
                        "link": "output",
                        "name": "fe4b229f-a9c1-4f1b-a646-4269d8f50b52.stf",
                        "size": 4811
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000011",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e5796f8b-b3a5-44f1-85e0-df3d3c266900.lht",
                        "size": 17511
                    },
                    {
                        "link": "input",
                        "name": "1b669da1-d3a7-450d-8b7c-b3efaba3af9b.lht",
                        "size": 1601
                    },
                    {
                        "link": "output",
                        "name": "08970613-e532-4e29-a5ad-947eba10af67.stf",
                        "size": 15561
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000012",
                "type": "compute",
                "runtime": 3.048,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "5b72f353-5b73-4289-b84c-23474ef0377f.lht",
                        "size": 14125
                    },
                    {
                        "link": "input",
                        "name": "f5e8fe68-c58f-49a8-b52d-8efabc54347a.lht",
                        "size": 14291
                    },
                    {
                        "link": "output",
                        "name": "d9767c7a-df2f-4da1-9885-cb621769f3e6.stf",
                        "size": 15861
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000013",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d89800e4-d36a-486a-a615-d0286f7d8d82.lht",
                        "size": 15226
                    },
                    {
                        "link": "input",
                        "name": "822c29f6-d179-4eab-be3a-a3a7984dfddc.lht",
                        "size": 14059
                    },
                    {
                        "link": "output",
                        "name": "f7383d38-1dfb-4683-80b4-e4e5450a46cb.stf",
                        "size": 11842
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000014",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f2202ff3-6e35-4dd2-b18c-93d8894f762d.lht",
                        "size": 12783
                    },
                    {
                        "link": "input",
                        "name": "ecd5ac34-7cdb-495f-841a-7451df4532fb.lht",
                        "size": 6648
                    },
                    {
                        "link": "output",
                        "name": "58a3299f-d45a-46a9-aab9-cc15d7e0de5e.stf",
                        "size": 14652
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000015",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "14794d4f-2445-42a6-97cf-077c9cecb2ba.lht",
                        "size": 15286
                    },
                    {
                        "link": "input",
                        "name": "deb3eac4-5dbf-42e0-9be2-95e5adf4c58c.lht",
                        "size": 9896
                    },
                    {
                        "link": "output",
                        "name": "af232190-8b8d-4b6a-9e94-4a763d56343d.stf",
                        "size": 14142
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000016",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "417ef459-6e81-4b83-9a02-2af72aef42e3.lht",
                        "size": 14530
                    },
                    {
                        "link": "input",
                        "name": "45321141-aaba-476e-a8b3-1547d7feddeb.lht",
                        "size": 11153
                    },
                    {
                        "link": "output",
                        "name": "8b5cd056-4c72-4998-b214-7a3b94e88e54.stf",
                        "size": 11982
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000017",
                "type": "compute",
                "runtime": 3.77,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a5779b2b-823b-4a72-b843-f68aa9aed258.lht",
                        "size": 4464
                    },
                    {
                        "link": "input",
                        "name": "238f6b00-ac2c-4176-a173-2e279dd6feec.lht",
                        "size": 2743
                    },
                    {
                        "link": "output",
                        "name": "f8bd44ef-3799-4a88-9c0a-69f2323aafe7.stf",
                        "size": 13590
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000018",
                "type": "compute",
                "runtime": 4.68,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "31d13e77-857e-415f-8e4a-58fcac36a5fa.lht",
                        "size": 4309
                    },
                    {
                        "link": "input",
                        "name": "ad3b0586-520f-41ad-9767-75f86ac5bf87.lht",
                        "size": 6088
                    },
                    {
                        "link": "output",
                        "name": "8bcf31b8-888e-40f1-8c51-e49c44e27b5f.stf",
                        "size": 8823
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000019",
                "type": "compute",
                "runtime": 2.841,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "3be75daa-107e-4fdd-92ae-802ad948b40e.lht",
                        "size": 16657
                    },
                    {
                        "link": "input",
                        "name": "c17fc2cd-8865-4176-92fe-1ffbc24df00a.lht",
                        "size": 12009
                    },
                    {
                        "link": "output",
                        "name": "1c47788d-c547-454c-b8cc-272d59174c1f.stf",
                        "size": 17727
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000020",
                "type": "compute",
                "runtime": 4.343,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4597fc6a-d91a-4b66-b7a6-9bbba118bba5.lht",
                        "size": 8047
                    },
                    {
                        "link": "input",
                        "name": "8b64ccc1-4350-4ed4-bc1c-9d8a773d8003.lht",
                        "size": 11919
                    },
                    {
                        "link": "output",
                        "name": "04bd661a-1e30-4f62-9fdc-74f1650e8c53.stf",
                        "size": 13582
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000021",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b1f611c1-dd11-4082-a21f-a0c6dc95e321.lht",
                        "size": 11970
                    },
                    {
                        "link": "input",
                        "name": "a754e328-26a5-4a1e-8eec-2162afdea67e.lht",
                        "size": 12105
                    },
                    {
                        "link": "output",
                        "name": "481c73f4-407b-4ea0-97cf-97bc98d1dbc5.stf",
                        "size": 16624
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000022",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "94ae87c1-7836-44f5-baba-350314c0057d.lht",
                        "size": 13448
                    },
                    {
                        "link": "input",
                        "name": "95b34a1b-6fa0-4da6-8c0b-ba240673645d.lht",
                        "size": 9759
                    },
                    {
                        "link": "output",
                        "name": "8a2ac72e-096b-4016-837c-83601c4053d3.stf",
                        "size": 12327
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000023",
                "type": "compute",
                "runtime": 3.823,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "662991f7-ee89-4b5b-9ccc-e2d5f8967cb2.lht",
                        "size": 8104
                    },
                    {
                        "link": "input",
                        "name": "2c9a80ff-efa6-4f46-9e61-315372b1c0b0.lht",
                        "size": 12287
                    },
                    {
                        "link": "output",
                        "name": "3fc3fea7-b8c1-474c-a6a9-726e39bd3643.stf",
                        "size": 13346
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000024",
                "type": "compute",
                "runtime": 2.068,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "604d508f-f6d3-4347-a9d0-c0cda650d170.lht",
                        "size": 10394
                    },
                    {
                        "link": "input",
                        "name": "4aca5c92-cf62-4e2c-99e8-7bf1c9e16a23.lht",
                        "size": 15175
                    },
                    {
                        "link": "output",
                        "name": "21a0a54e-9d4d-474a-8b53-329de77c9b46.stf",
                        "size": 16967
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000025",
                "type": "compute",
                "runtime": 4.602,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f31290e1-ea3a-49ab-b8cc-4b137f2da12e.lht",
                        "size": 9217
                    },
                    {
                        "link": "input",
                        "name": "14341476-bdaa-4059-964b-f1a2757a606e.lht",
                        "size": 11756
                    },
                    {
                        "link": "output",
                        "name": "ea35115b-b807-4b02-9b20-c26622242a15.stf",
                        "size": 17739
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000026",
                "type": "compute",
                "runtime": 5.018,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fd3c0644-c71c-4072-b4a1-75bf02d9db16.lht",
                        "size": 4211
                    },
                    {
                        "link": "input",
                        "name": "8a3d578b-5765-458d-9a25-4daab45d8cc2.lht",
                        "size": 11733
                    },
                    {
                        "link": "output",
                        "name": "66ddb8be-dc38-4d58-92d5-5bde69865a6a.stf",
                        "size": 12760
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000027",
                "type": "compute",
                "runtime": 2.226,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d9299ae0-5b8c-48a4-b075-c5c527a5b8e1.lht",
                        "size": 16241
                    },
                    {
                        "link": "input",
                        "name": "8b264500-3ce5-442a-a375-1a238abccc6c.lht",
                        "size": 5760
                    },
                    {
                        "link": "output",
                        "name": "337fcecf-d794-49b4-be76-70d861a9ec64.stf",
                        "size": 14181
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000028",
                "type": "compute",
                "runtime": 0.919,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "2df3a627-602f-4596-a369-20806917e7d7.lht",
                        "size": 16209
                    },
                    {
                        "link": "input",
                        "name": "bbf609e4-db29-453b-8ff0-1e4bf7e74498.lht",
                        "size": 10899
                    },
                    {
                        "link": "output",
                        "name": "b34cb554-fc88-43d7-9335-e756b57b46be.stf",
                        "size": 16913
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000029",
                "type": "compute",
                "runtime": 1.075,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "beeb5961-20c2-482e-9388-1afe444f2fd3.lht",
                        "size": 14829
                    },
                    {
                        "link": "input",
                        "name": "1ddcd03d-94c0-46d5-bcda-17394f1ab607.lht",
                        "size": 2410
                    },
                    {
                        "link": "output",
                        "name": "214b8dcc-f5c6-4741-830a-220cd4ef32ac.stf",
                        "size": 16647
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000030",
                "type": "compute",
                "runtime": 1.421,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "987f41a7-8f6e-468c-b382-f53ca15fc533.lht",
                        "size": 14613
                    },
                    {
                        "link": "input",
                        "name": "c7804dcf-38c7-4a92-9ef8-d98bd3d9d317.lht",
                        "size": 14381
                    },
                    {
                        "link": "output",
                        "name": "eb4f9236-45b6-48e3-a17c-9b49ed074df9.stf",
                        "size": 11524
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000031",
                "type": "compute",
                "runtime": 1.341,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "3ae1b42b-d4c1-477b-9388-346e3f28f9f5.lht",
                        "size": 7027
                    },
                    {
                        "link": "input",
                        "name": "19e638ef-5df2-4488-aab3-c37b43fe0226.lht",
                        "size": 13771
                    },
                    {
                        "link": "output",
                        "name": "41720cfd-6510-4097-b983-ae59cfd8beb0.stf",
                        "size": 10280
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000032",
                "type": "compute",
                "runtime": 1.068,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1e022aae-01f8-4daa-ac13-7c7822c24a00.lht",
                        "size": 6335
                    },
                    {
                        "link": "input",
                        "name": "c76c1b00-5f5d-4b2d-8d57-7aa99803399d.lht",
                        "size": 15162
                    },
                    {
                        "link": "output",
                        "name": "6834818b-3ef1-4596-93ca-819f9a9842d4.stf",
                        "size": 12554
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000033",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "70c9f347-066d-4e50-a194-356d8995026f.lht",
                        "size": 1601
                    },
                    {
                        "link": "input",
                        "name": "77dba63d-e9c0-4512-b86e-13f78734a20c.lht",
                        "size": 12494
                    },
                    {
                        "link": "output",
                        "name": "d00877f8-a717-442a-98e5-fff76518de4c.stf",
                        "size": 13784
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000034",
                "type": "compute",
                "runtime": 4.205,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb6de3f0-1758-43ab-8563-2767e2784bc3.lht",
                        "size": 9761
                    },
                    {
                        "link": "input",
                        "name": "9c51b487-e056-4064-b6fc-c9a9370f797b.lht",
                        "size": 12885
                    },
                    {
                        "link": "output",
                        "name": "af11b4c1-c899-44a1-a418-2e22c9619cb1.stf",
                        "size": 18587
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000035",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "5bad1e12-2dfe-4c88-9527-56a9d6eef61c.lht",
                        "size": 8700
                    },
                    {
                        "link": "input",
                        "name": "0e1cff7b-42cc-405b-8e8c-e7d32b50b9ff.lht",
                        "size": 14427
                    },
                    {
                        "link": "output",
                        "name": "8a7bb2b7-21c1-4052-a852-fb8ecba9c508.stf",
                        "size": 9046
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000036",
                "type": "compute",
                "runtime": 1.489,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1b72146d-b885-411c-8249-b0afecdb7bef.lht",
                        "size": 1601
                    },
                    {
                        "link": "input",
                        "name": "7e3c15f8-bd94-4249-9115-de934763b205.lht",
                        "size": 13923
                    },
                    {
                        "link": "output",
                        "name": "37b1fb24-4e3c-44d9-b793-2d01aaef0b9f.stf",
                        "size": 13174
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000037",
                "type": "compute",
                "runtime": 2.783,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a6366721-b854-4636-adf1-e508c6aa66e7.lht",
                        "size": 14686
                    },
                    {
                        "link": "input",
                        "name": "cb7f1072-365d-447d-88fa-a642be2b836a.lht",
                        "size": 5057
                    },
                    {
                        "link": "output",
                        "name": "fd032a52-5424-4b44-a120-ca9b165212d7.stf",
                        "size": 8633
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000038",
                "type": "compute",
                "runtime": 1.849,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "5b5e3172-2675-4cd0-8b8b-f142e0f70fd5.lht",
                        "size": 5023
                    },
                    {
                        "link": "input",
                        "name": "4df43d57-48c0-443c-bc04-4c1440e51277.lht",
                        "size": 16500
                    },
                    {
                        "link": "output",
                        "name": "6ef95d49-c4d9-400b-a7ba-1a4b0ddd92f2.stf",
                        "size": 8590
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000039",
                "type": "compute",
                "runtime": 5.426,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "79daddd0-b7be-4d3d-9f6c-6d742b4b139d.lht",
                        "size": 17319
                    },
                    {
                        "link": "input",
                        "name": "0e0845b1-dec9-404f-beee-ac7c92a381c9.lht",
                        "size": 10072
                    },
                    {
                        "link": "output",
                        "name": "e35ac0fb-3de4-4a4a-a756-e2e3a125dec6.stf",
                        "size": 9573
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000040",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "3c5ab35b-5cd4-4e5c-9830-13e247192219.lht",
                        "size": 14482
                    },
                    {
                        "link": "input",
                        "name": "3920af8b-44a3-47c1-a814-32bea364586c.lht",
                        "size": 4041
                    },
                    {
                        "link": "output",
                        "name": "317b031d-484c-48bb-a153-9162f80378ae.stf",
                        "size": 15307
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000041",
                "type": "compute",
                "runtime": 2.08,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "6f72b8bd-cab3-4664-9aaa-74b1eb27efc5.lht",
                        "size": 15908
                    },
                    {
                        "link": "input",
                        "name": "3583fc91-97ef-4ec9-8eec-b078e47e422c.lht",
                        "size": 14208
                    },
                    {
                        "link": "output",
                        "name": "8d0bf5c7-1c88-43e4-8d3d-25d3f870aca9.stf",
                        "size": 17300
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000042",
                "type": "compute",
                "runtime": 2.542,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "5b9425f8-c41f-4b3e-9ad3-e9c017acc9bd.lht",
                        "size": 16086
                    },
                    {
                        "link": "input",
                        "name": "68e0597f-a942-44c6-ab6d-eca2c2c62dff.lht",
                        "size": 15749
                    },
                    {
                        "link": "output",
                        "name": "8de449d9-78ee-4755-a5e8-a540f17b3532.stf",
                        "size": 10238
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000043",
                "type": "compute",
                "runtime": 3.14,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "80a6bded-7303-4d64-9e97-89a856eb5f55.lht",
                        "size": 1601
                    },
                    {
                        "link": "input",
                        "name": "1ecef297-bfd6-4cf9-8e14-384321fc9a9e.lht",
                        "size": 12338
                    },
                    {
                        "link": "output",
                        "name": "60f22228-9663-442b-8977-68acfa4a0bf0.stf",
                        "size": 14484
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000044",
                "type": "compute",
                "runtime": 3.29,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f3587641-c177-4e62-bbd0-f7e4e492f13c.lht",
                        "size": 11586
                    },
                    {
                        "link": "input",
                        "name": "b412bec7-5580-4228-9cdd-a09e677fc0f7.lht",
                        "size": 5782
                    },
                    {
                        "link": "output",
                        "name": "19915c64-5f66-4742-b659-b2849cc0b65e.stf",
                        "size": 4599
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000045",
                "type": "compute",
                "runtime": 1.194,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e8b1471d-dcbb-4c58-bfa4-601ba77fb8e2.lht",
                        "size": 11554
                    },
                    {
                        "link": "input",
                        "name": "b39e1a1b-87fe-410f-839e-48b822d744a4.lht",
                        "size": 5303
                    },
                    {
                        "link": "output",
                        "name": "42339778-6dc3-4e2c-b1e8-6f3250701e6d.stf",
                        "size": 11776
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000046",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "dec74315-20d2-4390-968e-a79544b2683e.lht",
                        "size": 17280
                    },
                    {
                        "link": "input",
                        "name": "ce734488-cfca-4f18-bbf5-5b4a649604dd.lht",
                        "size": 3242
                    },
                    {
                        "link": "output",
                        "name": "fb01a435-034e-47c6-be3d-828859a42551.stf",
                        "size": 3890
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000047",
                "type": "compute",
                "runtime": 2.089,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d254c2bc-61ef-48a4-8e0b-c776a2a240b1.lht",
                        "size": 9323
                    },
                    {
                        "link": "input",
                        "name": "0aa3d8d8-b202-43ed-8657-f5c567716ded.lht",
                        "size": 9400
                    },
                    {
                        "link": "output",
                        "name": "4ea61b73-885f-434f-9c0d-200456d9dfab.stf",
                        "size": 9520
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000048",
                "type": "compute",
                "runtime": 0.561,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "be758f5f-f62e-4849-886e-c693b439e634.lht",
                        "size": 11963
                    },
                    {
                        "link": "input",
                        "name": "69a87a8f-a022-4c46-9c8b-56ccb86c636c.lht",
                        "size": 13731
                    },
                    {
                        "link": "output",
                        "name": "99c39a8a-080e-499c-a27d-a5645f0f449f.stf",
                        "size": 1701
                    }
                ],
                "cores": 1
            },
            {
                "name": "sG1IterDecon_00000049",
                "type": "compute",
                "runtime": 5.365,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "2b9ee381-59c7-41ed-8e39-c84329a5b8d9.lht",
                        "size": 15717
                    },
                    {
                        "link": "input",
                        "name": "f72865d2-ba01-4d0b-8a7c-fd2f5255e04a.lht",
                        "size": 1601
                    },
                    {
                        "link": "output",
                        "name": "c5f220a4-1056-40d8-9f2c-05a3d84b2f51.stf",
                        "size": 5933
                    }
                ],
                "cores": 1
            },
            {
                "name": "wrapper_siftSTFByMisfit_00000050",
                "type": "compute",
                "runtime": 0.135,
                "parents": [
                    "sG1IterDecon_00000001",
                    "sG1IterDecon_00000002",
                    "sG1IterDecon_00000003",
                    "sG1IterDecon_00000004",
                    "sG1IterDecon_00000005",
                    "sG1IterDecon_00000006",
                    "sG1IterDecon_00000007",
                    "sG1IterDecon_00000008",
                    "sG1IterDecon_00000009",
                    "sG1IterDecon_00000010",
                    "sG1IterDecon_00000011",
                    "sG1IterDecon_00000012",
                    "sG1IterDecon_00000013",
                    "sG1IterDecon_00000014",
                    "sG1IterDecon_00000015",
                    "sG1IterDecon_00000016",
                    "sG1IterDecon_00000017",
                    "sG1IterDecon_00000018",
                    "sG1IterDecon_00000019",
                    "sG1IterDecon_00000020",
                    "sG1IterDecon_00000021",
                    "sG1IterDecon_00000022",
                    "sG1IterDecon_00000023",
                    "sG1IterDecon_00000024",
                    "sG1IterDecon_00000025",
                    "sG1IterDecon_00000026",
                    "sG1IterDecon_00000027",
                    "sG1IterDecon_00000028",
                    "sG1IterDecon_00000029",
                    "sG1IterDecon_00000030",
                    "sG1IterDecon_00000031",
                    "sG1IterDecon_00000032",
                    "sG1IterDecon_00000033",
                    "sG1IterDecon_00000034",
                    "sG1IterDecon_00000035",
                    "sG1IterDecon_00000036",
                    "sG1IterDecon_00000037",
                    "sG1IterDecon_00000038",
                    "sG1IterDecon_00000039",
                    "sG1IterDecon_00000040",
                    "sG1IterDecon_00000041",
                    "sG1IterDecon_00000042",
                    "sG1IterDecon_00000043",
                    "sG1IterDecon_00000044",
                    "sG1IterDecon_00000045",
                    "sG1IterDecon_00000046",
                    "sG1IterDecon_00000047",
                    "sG1IterDecon_00000048",
                    "sG1IterDecon_00000049"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "a444c168-c28c-4b68-9fec-70e44ce34590.stf",
                        "size": 1701
                    },
                    {
                        "link": "input",
                        "name": "6292fdb7-9007-4895-bed4-bcf8a9d49e8b.stf",
                        "size": 5527
                    },
                    {
                        "link": "input",
                        "name": "ed9e9aaf-0dce-4634-88ae-5cba411b875b.stf",
                        "size": 13083
                    },
                    {
                        "link": "input",
                        "name": "b337994c-ecd5-4b2a-a66e-fc4e00cb98dc.stf",
                        "size": 12909
                    },
                    {
                        "link": "input",
                        "name": "5c7fb732-b18a-4b64-91ac-c14280a4bc58.stf",
                        "size": 15280
                    },
                    {
                        "link": "input",
                        "name": "039da024-9276-497d-b90b-2e950f4c9d36.stf",
                        "size": 11936
                    },
                    {
                        "link": "input",
                        "name": "447dc099-6efa-4be5-9fb3-2c02559626e4.stf",
                        "size": 16178
                    },
                    {
                        "link": "input",
                        "name": "9a6c3029-3587-488b-8cd7-99f98b5af5a4.stf",
                        "size": 15100
                    },
                    {
                        "link": "input",
                        "name": "c0f7bd86-7110-4ae5-ab28-d06a1096e2c7.stf",
                        "size": 12113
                    },
                    {
                        "link": "input",
                        "name": "fe4b229f-a9c1-4f1b-a646-4269d8f50b52.stf",
                        "size": 4811
                    },
                    {
                        "link": "input",
                        "name": "08970613-e532-4e29-a5ad-947eba10af67.stf",
                        "size": 15561
                    },
                    {
                        "link": "input",
                        "name": "d9767c7a-df2f-4da1-9885-cb621769f3e6.stf",
                        "size": 15861
                    },
                    {
                        "link": "input",
                        "name": "f7383d38-1dfb-4683-80b4-e4e5450a46cb.stf",
                        "size": 11842
                    },
                    {
                        "link": "input",
                        "name": "58a3299f-d45a-46a9-aab9-cc15d7e0de5e.stf",
                        "size": 14652
                    },
                    {
                        "link": "input",
                        "name": "af232190-8b8d-4b6a-9e94-4a763d56343d.stf",
                        "size": 14142
                    },
                    {
                        "link": "input",
                        "name": "8b5cd056-4c72-4998-b214-7a3b94e88e54.stf",
                        "size": 11982
                    },
                    {
                        "link": "input",
                        "name": "f8bd44ef-3799-4a88-9c0a-69f2323aafe7.stf",
                        "size": 13590
                    },
                    {
                        "link": "input",
                        "name": "8bcf31b8-888e-40f1-8c51-e49c44e27b5f.stf",
                        "size": 8823
                    },
                    {
                        "link": "input",
                        "name": "1c47788d-c547-454c-b8cc-272d59174c1f.stf",
                        "size": 17727
                    },
                    {
                        "link": "input",
                        "name": "04bd661a-1e30-4f62-9fdc-74f1650e8c53.stf",
                        "size": 13582
                    },
                    {
                        "link": "input",
                        "name": "481c73f4-407b-4ea0-97cf-97bc98d1dbc5.stf",
                        "size": 16624
                    },
                    {
                        "link": "input",
                        "name": "8a2ac72e-096b-4016-837c-83601c4053d3.stf",
                        "size": 12327
                    },
                    {
                        "link": "input",
                        "name": "3fc3fea7-b8c1-474c-a6a9-726e39bd3643.stf",
                        "size": 13346
                    },
                    {
                        "link": "input",
                        "name": "21a0a54e-9d4d-474a-8b53-329de77c9b46.stf",
                        "size": 16967
                    },
                    {
                        "link": "input",
                        "name": "ea35115b-b807-4b02-9b20-c26622242a15.stf",
                        "size": 17739
                    },
                    {
                        "link": "input",
                        "name": "66ddb8be-dc38-4d58-92d5-5bde69865a6a.stf",
                        "size": 12760
                    },
                    {
                        "link": "input",
                        "name": "337fcecf-d794-49b4-be76-70d861a9ec64.stf",
                        "size": 14181
                    },
                    {
                        "link": "input",
                        "name": "b34cb554-fc88-43d7-9335-e756b57b46be.stf",
                        "size": 16913
                    },
                    {
                        "link": "input",
                        "name": "214b8dcc-f5c6-4741-830a-220cd4ef32ac.stf",
                        "size": 16647
                    },
                    {
                        "link": "input",
                        "name": "eb4f9236-45b6-48e3-a17c-9b49ed074df9.stf",
                        "size": 11524
                    },
                    {
                        "link": "input",
                        "name": "41720cfd-6510-4097-b983-ae59cfd8beb0.stf",
                        "size": 10280
                    },
                    {
                        "link": "input",
                        "name": "6834818b-3ef1-4596-93ca-819f9a9842d4.stf",
                        "size": 12554
                    },
                    {
                        "link": "input",
                        "name": "d00877f8-a717-442a-98e5-fff76518de4c.stf",
                        "size": 13784
                    },
                    {
                        "link": "input",
                        "name": "af11b4c1-c899-44a1-a418-2e22c9619cb1.stf",
                        "size": 18587
                    },
                    {
                        "link": "input",
                        "name": "8a7bb2b7-21c1-4052-a852-fb8ecba9c508.stf",
                        "size": 9046
                    },
                    {
                        "link": "input",
                        "name": "37b1fb24-4e3c-44d9-b793-2d01aaef0b9f.stf",
                        "size": 13174
                    },
                    {
                        "link": "input",
                        "name": "fd032a52-5424-4b44-a120-ca9b165212d7.stf",
                        "size": 8633
                    },
                    {
                        "link": "input",
                        "name": "6ef95d49-c4d9-400b-a7ba-1a4b0ddd92f2.stf",
                        "size": 8590
                    },
                    {
                        "link": "input",
                        "name": "e35ac0fb-3de4-4a4a-a756-e2e3a125dec6.stf",
                        "size": 9573
                    },
                    {
                        "link": "input",
                        "name": "317b031d-484c-48bb-a153-9162f80378ae.stf",
                        "size": 15307
                    },
                    {
                        "link": "input",
                        "name": "8d0bf5c7-1c88-43e4-8d3d-25d3f870aca9.stf",
                        "size": 17300
                    },
                    {
                        "link": "input",
                        "name": "8de449d9-78ee-4755-a5e8-a540f17b3532.stf",
                        "size": 10238
                    },
                    {
                        "link": "input",
                        "name": "60f22228-9663-442b-8977-68acfa4a0bf0.stf",
                        "size": 14484
                    },
                    {
                        "link": "input",
                        "name": "19915c64-5f66-4742-b659-b2849cc0b65e.stf",
                        "size": 4599
                    },
                    {
                        "link": "input",
                        "name": "42339778-6dc3-4e2c-b1e8-6f3250701e6d.stf",
                        "size": 11776
                    },
                    {
                        "link": "input",
                        "name": "fb01a435-034e-47c6-be3d-828859a42551.stf",
                        "size": 3890
                    },
                    {
                        "link": "input",
                        "name": "4ea61b73-885f-434f-9c0d-200456d9dfab.stf",
                        "size": 9520
                    },
                    {
                        "link": "input",
                        "name": "99c39a8a-080e-499c-a27d-a5645f0f449f.stf",
                        "size": 1701
                    },
                    {
                        "link": "input",
                        "name": "c5f220a4-1056-40d8-9f2c-05a3d84b2f51.stf",
                        "size": 5933
                    },
                    {
                        "link": "input",
                        "name": "19542208-2f20-42d8-94e2-7c8c8baa8c72.py",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "35ac12d7-60cb-4355-8c27-db2751feb639siftSTFByMisfit",
                        "size": 1386
                    },
                    {
                        "link": "output",
                        "name": "6e198612-6b4a-4489-8388-6fc93bd93b7e.gz",
                        "size": 68709
                    }
                ],
                "cores": 1
            }
        ],
        "machines": []
    }
}