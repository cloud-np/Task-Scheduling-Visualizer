export default {
    "name": "Seismology-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2020-10-30T09:35:12.625046",
    "schemaVersion": "1.0",
    "author": {
        "name": "cloud",
        "email": "support@workflowhub.org"
    },
    "wms": {
        "name": "WorkflowHub",
        "version": "0.4-dev",
        "url": "https://workflowhub.readthedocs.io/en/v0.4-dev/"
    },
    "workflow": {
        "executedAt": "20201030T113512+0200",
        "makespan": 0.0,
        "machines": [
            {
                "nodeName": "fake-1",
                "system": "linux",
                "cpu": {
                    "count": 1,
                    "speed": 1
                }
            }
        ],
        "jobs": [
            {
                "name": "sG1IterDecon_00000001",
                "type": "compute",
                "runtime": 0.087,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ffa0c8c5-9fef-4020-ab2d-f5b4dcd7161a.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "1e3bf751-b08b-42a0-817f-bd04352de2a6.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "a843e768-7f41-47ef-84b1-fe3ae6630870.stf",
                        "size": 3177
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000002",
                "type": "compute",
                "runtime": 0.173,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a58b7ae0-0ac5-4e6a-9601-51814bfa387f.lht",
                        "size": 10424
                    },
                    {
                        "link": "input",
                        "name": "c5ea51be-8718-4ff9-a566-fc8986e744fd.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "72d90081-e635-457f-9e51-456d6cb958f3.stf",
                        "size": 2307
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000003",
                "type": "compute",
                "runtime": 1.951,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "3ffc7b3b-c328-4de0-9806-da644837813c.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "3694d985-a4ba-4088-afee-35fdf899aa58.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "076f9095-3873-45cf-983a-d658a9fdc1d9.stf",
                        "size": 1646
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000004",
                "type": "compute",
                "runtime": 0.087,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "56d979d5-02e1-486a-abb3-337e2adb20fd.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "e06ce5b0-6c02-42c0-9255-24d3be40a4cd.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "6f70cd2c-6e02-4b15-9280-09b6a80af35c.stf",
                        "size": 1881
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000005",
                "type": "compute",
                "runtime": 5.615,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bcffba2e-d91d-440e-8bdb-c5c2c5595fe1.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "17619ec7-5455-4eee-9eb0-afa29bed17c5.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "dba461ce-e900-4cb6-87cb-772791077a13.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000006",
                "type": "compute",
                "runtime": 3.604,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c5826fdf-9fc0-4a6d-b073-a24e598e8c95.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "ddbd56cb-dc21-4575-b3f2-2cdf90925e86.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "8793bb1c-44a7-4ff9-a6dd-3e6d351a5892.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000007",
                "type": "compute",
                "runtime": 1.863,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "80c5477c-e806-4f0d-8680-87dcc5f932a7.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "ac807f83-7564-4a2d-a61a-5770daa0f450.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "7cd386a0-3407-4d14-a67c-23d8b5865a1e.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000008",
                "type": "compute",
                "runtime": 0.673,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "33a615ad-ec40-459b-ade9-06ed5c4b2c87.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "3074ccfb-441b-45d9-8992-ca17e32af457.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "d328f46c-797e-498e-a26e-cdc07a0ca5a8.stf",
                        "size": 2589
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000009",
                "type": "compute",
                "runtime": 1.188,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "db462ac3-42b1-4037-bd03-dc51c2d7bf70.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "e8a6e427-3e08-43f1-bae1-9f78fac2b4f8.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "18c4bc92-b0ec-4386-ba87-134da032d412.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000010",
                "type": "compute",
                "runtime": 1.984,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4a732380-f662-41ac-aa77-f0da54205fc4.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "7473fcc4-ee65-4afb-9ffc-1aa2596f9b1d.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "054c702b-eadd-469c-8e30-15983661f9bc.stf",
                        "size": 1359
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000011",
                "type": "compute",
                "runtime": 0.172,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e5d7ba4a-b39c-4205-863b-54224b00483f.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "e8e39c2d-bf76-4a6d-a7e2-b03588265e84.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "8fbadedb-3bb8-469e-abd2-27c947924038.stf",
                        "size": 1563
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000012",
                "type": "compute",
                "runtime": 5.005,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9438b63e-694f-49d5-bd6e-cfe8a2588afd.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "012f971e-aba9-494a-8de4-ede75209316b.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "861e5858-36f6-4b7a-bd21-979a1b261a3c.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000013",
                "type": "compute",
                "runtime": 1.637,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e582cc31-cba6-40fc-97d6-9bd46c76c385.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "a7158a96-a58c-401e-b1fb-9cbbf7d2ee7a.lht",
                        "size": 16012
                    },
                    {
                        "link": "output",
                        "name": "d3f26a0d-5e63-467e-a2ae-34a9de4e93e6.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000014",
                "type": "compute",
                "runtime": 0.337,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9fcc0db5-a004-45d6-8152-a9e12aa4e752.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "e85fabac-e474-4863-b336-420f4ef5d1b0.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "7a6b7aa8-1ea5-4a22-938a-3d9b34924091.stf",
                        "size": 2962
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000015",
                "type": "compute",
                "runtime": 5.615,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "63e7cfa6-0c53-4dfe-b666-bae3b94bfe51.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "2661cd90-7156-48dd-8bf6-6e610263ae09.lht",
                        "size": 12672
                    },
                    {
                        "link": "output",
                        "name": "fa20a9a2-dda0-4afc-8d1b-f42a6b30e395.stf",
                        "size": 2517
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000016",
                "type": "compute",
                "runtime": 1.276,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e61b28ac-bf32-4ffd-8e52-df4f1e6fcb63.lht",
                        "size": 6300
                    },
                    {
                        "link": "input",
                        "name": "c5aceea6-c52f-40c0-8afa-60a1e10464c4.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "d1fa3b1d-1d04-4f31-967e-8d14f77547a8.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000017",
                "type": "compute",
                "runtime": 3.063,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "82f3c967-de14-4270-b99f-3390294d85c0.lht",
                        "size": 16012
                    },
                    {
                        "link": "input",
                        "name": "fc0fccf4-1547-486c-8b26-19640ec0f6ec.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "1893be05-1a51-4e1d-886c-39ccaf81e75d.stf",
                        "size": 1144
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000018",
                "type": "compute",
                "runtime": 5.615,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "68470321-42ff-4d6c-9733-b73f6bd761d4.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "0dc8af0f-e625-4fdc-880d-f506e71a6f81.lht",
                        "size": 16012
                    },
                    {
                        "link": "output",
                        "name": "82e2b852-6312-4b61-984c-5ee7e521ede9.stf",
                        "size": 1606
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000019",
                "type": "compute",
                "runtime": 0.622,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "5de20b1c-92e1-419b-b00f-c0c52a12bf32.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "d09482ce-9cc5-4067-9fda-b28dd09b6dc0.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "69c756eb-c0b7-447c-a32c-4b9f71d35dea.stf",
                        "size": 1803
                    }
                ]
            },
            {
                "name": "sG1IterDecon_00000020",
                "type": "compute",
                "runtime": 0.087,
                "parents": [],
                "children": [
                    "wrapper_siftSTFByMisfit_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a6a5f7a2-4caf-47d0-b55a-f0e637ccf20f.lht",
                        "size": 1024
                    },
                    {
                        "link": "input",
                        "name": "6c31953f-3e4d-42d2-a87f-04f3c2a916a6.lht",
                        "size": 1024
                    },
                    {
                        "link": "output",
                        "name": "ad50d20d-f650-4606-bdc1-dee9c7ccf741.stf",
                        "size": 1695
                    }
                ]
            },
            {
                "name": "wrapper_siftSTFByMisfit_00000021",
                "type": "compute",
                "runtime": 1.351,
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
                    "sG1IterDecon_00000020"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "a843e768-7f41-47ef-84b1-fe3ae6630870.stf",
                        "size": 3177
                    },
                    {
                        "link": "input",
                        "name": "72d90081-e635-457f-9e51-456d6cb958f3.stf",
                        "size": 2307
                    },
                    {
                        "link": "input",
                        "name": "076f9095-3873-45cf-983a-d658a9fdc1d9.stf",
                        "size": 1646
                    },
                    {
                        "link": "input",
                        "name": "6f70cd2c-6e02-4b15-9280-09b6a80af35c.stf",
                        "size": 1881
                    },
                    {
                        "link": "input",
                        "name": "dba461ce-e900-4cb6-87cb-772791077a13.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "8793bb1c-44a7-4ff9-a6dd-3e6d351a5892.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "7cd386a0-3407-4d14-a67c-23d8b5865a1e.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "d328f46c-797e-498e-a26e-cdc07a0ca5a8.stf",
                        "size": 2589
                    },
                    {
                        "link": "input",
                        "name": "18c4bc92-b0ec-4386-ba87-134da032d412.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "054c702b-eadd-469c-8e30-15983661f9bc.stf",
                        "size": 1359
                    },
                    {
                        "link": "input",
                        "name": "8fbadedb-3bb8-469e-abd2-27c947924038.stf",
                        "size": 1563
                    },
                    {
                        "link": "input",
                        "name": "861e5858-36f6-4b7a-bd21-979a1b261a3c.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "d3f26a0d-5e63-467e-a2ae-34a9de4e93e6.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "7a6b7aa8-1ea5-4a22-938a-3d9b34924091.stf",
                        "size": 2962
                    },
                    {
                        "link": "input",
                        "name": "fa20a9a2-dda0-4afc-8d1b-f42a6b30e395.stf",
                        "size": 2517
                    },
                    {
                        "link": "input",
                        "name": "d1fa3b1d-1d04-4f31-967e-8d14f77547a8.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "1893be05-1a51-4e1d-886c-39ccaf81e75d.stf",
                        "size": 1144
                    },
                    {
                        "link": "input",
                        "name": "82e2b852-6312-4b61-984c-5ee7e521ede9.stf",
                        "size": 1606
                    },
                    {
                        "link": "input",
                        "name": "69c756eb-c0b7-447c-a32c-4b9f71d35dea.stf",
                        "size": 1803
                    },
                    {
                        "link": "input",
                        "name": "ad50d20d-f650-4606-bdc1-dee9c7ccf741.stf",
                        "size": 1695
                    },
                    {
                        "link": "input",
                        "name": "2128e151-2b64-4ab8-b57c-7a606e39c18c.py",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "1b71df56-29f0-4a8d-bad9-c41c6e699685siftSTFByMisfit",
                        "size": 1386
                    },
                    {
                        "link": "output",
                        "name": "83c05c14-0de1-41d2-a1d7-1049e5d38edc.gz",
                        "size": 63471
                    }
                ]
            }
        ]
    }
}