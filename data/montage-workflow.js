export default {
    "name": "Montage-dss-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2020-10-16T09:31:25.676200",
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
        "executedAt": "20201016T123125+0300",
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
                "name": "mProject_00000001",
                "type": "compute",
                "runtime": 686.289,
                "parents": [],
                "children": [
                    "mDiffFit_00000005",
                    "mDiffFit_00000008",
                    "mDiffFit_00000009",
                    "mDiffFit_00000010",
                    "mDiffFit_00000012",
                    "mDiffFit_00000013",
                    "mDiffFit_00000017",
                    "mDiffFit_00000021",
                    "mDiffFit_00000022",
                    "mDiffFit_00000023",
                    "mDiffFit_00000024",
                    "mDiffFit_00000026",
                    "mDiffFit_00000027",
                    "mDiffFit_00000029",
                    "mDiffFit_00000030",
                    "mDiffFit_00000031",
                    "mDiffFit_00000032",
                    "mDiffFit_00000033",
                    "mDiffFit_00000034",
                    "mDiffFit_00000035",
                    "mDiffFit_00000041",
                    "mDiffFit_00000043",
                    "mDiffFit_00000048",
                    "mDiffFit_00000049",
                    "mDiffFit_00000050",
                    "mDiffFit_00000053",
                    "mDiffFit_00000056",
                    "mDiffFit_00000057",
                    "mDiffFit_00000059",
                    "mDiffFit_00000061",
                    "mDiffFit_00000063",
                    "mDiffFit_00000065",
                    "mDiffFit_00000069",
                    "mDiffFit_00000074",
                    "mDiffFit_00000078",
                    "mDiffFit_00000079",
                    "mDiffFit_00000081",
                    "mDiffFit_00000085",
                    "mDiffFit_00000087",
                    "mDiffFit_00000089",
                    "mDiffFit_00000091",
                    "mDiffFit_00000093",
                    "mDiffFit_00000094",
                    "mDiffFit_00000097",
                    "mDiffFit_00000102",
                    "mDiffFit_00000103",
                    "mDiffFit_00000104",
                    "mDiffFit_00000105",
                    "mDiffFit_00000106",
                    "mDiffFit_00000107",
                    "mDiffFit_00000108",
                    "mDiffFit_00000111",
                    "mDiffFit_00000112",
                    "mDiffFit_00000113",
                    "mDiffFit_00000117",
                    "mDiffFit_00000122",
                    "mDiffFit_00000123",
                    "mDiffFit_00000124"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e178ccdd-258f-4eda-98c4-3787a8087131.fits",
                        "size": 5658400
                    },
                    {
                        "link": "input",
                        "name": "67b279ec-f2c7-49fe-b099-2049810ca4ba.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mProject_00000002",
                "type": "compute",
                "runtime": 160.278,
                "parents": [],
                "children": [
                    "mDiffFit_00000005",
                    "mDiffFit_00000006",
                    "mDiffFit_00000010",
                    "mDiffFit_00000015",
                    "mDiffFit_00000017",
                    "mDiffFit_00000018",
                    "mDiffFit_00000019",
                    "mDiffFit_00000020",
                    "mDiffFit_00000024",
                    "mDiffFit_00000025",
                    "mDiffFit_00000027",
                    "mDiffFit_00000028",
                    "mDiffFit_00000033",
                    "mDiffFit_00000035",
                    "mDiffFit_00000036",
                    "mDiffFit_00000037",
                    "mDiffFit_00000039",
                    "mDiffFit_00000040",
                    "mDiffFit_00000041",
                    "mDiffFit_00000042",
                    "mDiffFit_00000045",
                    "mDiffFit_00000046",
                    "mDiffFit_00000047",
                    "mDiffFit_00000048",
                    "mDiffFit_00000049",
                    "mDiffFit_00000051",
                    "mDiffFit_00000054",
                    "mDiffFit_00000059",
                    "mDiffFit_00000060",
                    "mDiffFit_00000061",
                    "mDiffFit_00000062",
                    "mDiffFit_00000070",
                    "mDiffFit_00000071",
                    "mDiffFit_00000072",
                    "mDiffFit_00000073",
                    "mDiffFit_00000075",
                    "mDiffFit_00000076",
                    "mDiffFit_00000077",
                    "mDiffFit_00000080",
                    "mDiffFit_00000083",
                    "mDiffFit_00000086",
                    "mDiffFit_00000091",
                    "mDiffFit_00000092",
                    "mDiffFit_00000094",
                    "mDiffFit_00000095",
                    "mDiffFit_00000096",
                    "mDiffFit_00000097",
                    "mDiffFit_00000098",
                    "mDiffFit_00000099",
                    "mDiffFit_00000100",
                    "mDiffFit_00000101",
                    "mDiffFit_00000102",
                    "mDiffFit_00000110",
                    "mDiffFit_00000111",
                    "mDiffFit_00000114",
                    "mDiffFit_00000118",
                    "mDiffFit_00000119",
                    "mDiffFit_00000121",
                    "mDiffFit_00000123",
                    "mDiffFit_00000124"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "8df597ca-b23c-4212-8fb2-b0fd8c97cb3b.fits",
                        "size": 5658400
                    },
                    {
                        "link": "input",
                        "name": "b579d23f-3fca-4e92-98fb-2cd517e13d2f.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mProject_00000003",
                "type": "compute",
                "runtime": 160.278,
                "parents": [],
                "children": [
                    "mDiffFit_00000006",
                    "mDiffFit_00000007",
                    "mDiffFit_00000008",
                    "mDiffFit_00000011",
                    "mDiffFit_00000013",
                    "mDiffFit_00000014",
                    "mDiffFit_00000016",
                    "mDiffFit_00000018",
                    "mDiffFit_00000019",
                    "mDiffFit_00000020",
                    "mDiffFit_00000021",
                    "mDiffFit_00000022",
                    "mDiffFit_00000023",
                    "mDiffFit_00000025",
                    "mDiffFit_00000030",
                    "mDiffFit_00000037",
                    "mDiffFit_00000038",
                    "mDiffFit_00000039",
                    "mDiffFit_00000040",
                    "mDiffFit_00000043",
                    "mDiffFit_00000044",
                    "mDiffFit_00000045",
                    "mDiffFit_00000046",
                    "mDiffFit_00000047",
                    "mDiffFit_00000052",
                    "mDiffFit_00000053",
                    "mDiffFit_00000054",
                    "mDiffFit_00000055",
                    "mDiffFit_00000058",
                    "mDiffFit_00000064",
                    "mDiffFit_00000066",
                    "mDiffFit_00000067",
                    "mDiffFit_00000068",
                    "mDiffFit_00000069",
                    "mDiffFit_00000071",
                    "mDiffFit_00000072",
                    "mDiffFit_00000074",
                    "mDiffFit_00000076",
                    "mDiffFit_00000077",
                    "mDiffFit_00000079",
                    "mDiffFit_00000081",
                    "mDiffFit_00000082",
                    "mDiffFit_00000084",
                    "mDiffFit_00000087",
                    "mDiffFit_00000088",
                    "mDiffFit_00000090",
                    "mDiffFit_00000092",
                    "mDiffFit_00000095",
                    "mDiffFit_00000096",
                    "mDiffFit_00000099",
                    "mDiffFit_00000100",
                    "mDiffFit_00000104",
                    "mDiffFit_00000106",
                    "mDiffFit_00000107",
                    "mDiffFit_00000109",
                    "mDiffFit_00000112",
                    "mDiffFit_00000114",
                    "mDiffFit_00000115",
                    "mDiffFit_00000116",
                    "mDiffFit_00000117",
                    "mDiffFit_00000119",
                    "mDiffFit_00000120",
                    "mDiffFit_00000121",
                    "mDiffFit_00000122"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fa15f6f9-cb21-4eca-9acd-8a5a18933c02.fits",
                        "size": 5658400
                    },
                    {
                        "link": "input",
                        "name": "5bdf3da8-73b6-4ca4-a64e-518e84134d5b.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mProject_00000004",
                "type": "compute",
                "runtime": 160.278,
                "parents": [],
                "children": [
                    "mDiffFit_00000007",
                    "mDiffFit_00000009",
                    "mDiffFit_00000011",
                    "mDiffFit_00000012",
                    "mDiffFit_00000014",
                    "mDiffFit_00000015",
                    "mDiffFit_00000016",
                    "mDiffFit_00000026",
                    "mDiffFit_00000028",
                    "mDiffFit_00000029",
                    "mDiffFit_00000031",
                    "mDiffFit_00000032",
                    "mDiffFit_00000034",
                    "mDiffFit_00000036",
                    "mDiffFit_00000038",
                    "mDiffFit_00000042",
                    "mDiffFit_00000044",
                    "mDiffFit_00000050",
                    "mDiffFit_00000051",
                    "mDiffFit_00000052",
                    "mDiffFit_00000055",
                    "mDiffFit_00000056",
                    "mDiffFit_00000057",
                    "mDiffFit_00000058",
                    "mDiffFit_00000060",
                    "mDiffFit_00000062",
                    "mDiffFit_00000063",
                    "mDiffFit_00000064",
                    "mDiffFit_00000065",
                    "mDiffFit_00000066",
                    "mDiffFit_00000067",
                    "mDiffFit_00000068",
                    "mDiffFit_00000070",
                    "mDiffFit_00000073",
                    "mDiffFit_00000075",
                    "mDiffFit_00000078",
                    "mDiffFit_00000080",
                    "mDiffFit_00000082",
                    "mDiffFit_00000083",
                    "mDiffFit_00000084",
                    "mDiffFit_00000085",
                    "mDiffFit_00000086",
                    "mDiffFit_00000088",
                    "mDiffFit_00000089",
                    "mDiffFit_00000090",
                    "mDiffFit_00000093",
                    "mDiffFit_00000098",
                    "mDiffFit_00000101",
                    "mDiffFit_00000103",
                    "mDiffFit_00000105",
                    "mDiffFit_00000108",
                    "mDiffFit_00000109",
                    "mDiffFit_00000110",
                    "mDiffFit_00000113",
                    "mDiffFit_00000115",
                    "mDiffFit_00000116",
                    "mDiffFit_00000118",
                    "mDiffFit_00000120"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "13781f88-c377-4932-9873-ab6a1255c010.fits",
                        "size": 5658400
                    },
                    {
                        "link": "input",
                        "name": "d102ab40-bee1-4d8a-87ab-8de296c8356b.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mDiffFit_00000005",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "79201caa-d135-486b-93cb-b56f753aacc2.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "59c970fd-eb4a-4ced-90f2-2c8a517d629b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000006",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "292e5d91-49c7-4d81-8794-eec8b9bcc45e.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "12b4ac99-c3fd-4b48-a090-8f894d168a28.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000007",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c25efcb7-5ba5-4ef5-9ea7-2ff78169ba06.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "35b6cb90-9427-4240-a2ab-9938a55b4760.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000008",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "3cb6b580-78ca-4c56-927a-972681baed51.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "e4c9e53e-1429-479b-9c5d-e18e90cfb1cd.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000009",
                "type": "compute",
                "runtime": 0.023,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c02b59f3-969d-4dd7-aa2c-08cdffe23198.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "59ecfa9a-80a8-4723-95ee-836f227d7203.txt",
                        "size": 63
                    }
                ]
            },
            {
                "name": "mDiffFit_00000010",
                "type": "compute",
                "runtime": 0.055,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "f0e740aa-6e80-422d-8174-2711c112f269.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "6aa15f53-0604-4aca-bfed-6fac84782e65.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000011",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9695b8d8-f673-4125-a176-c28d3b039d06.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "326a712b-238b-468c-8ac1-78933f73282d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000012",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b0822121-192e-491d-a011-184591c324b0.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "ded98459-133e-4672-864c-0c0893ca99c6.txt",
                        "size": 56
                    }
                ]
            },
            {
                "name": "mDiffFit_00000013",
                "type": "compute",
                "runtime": 8.395,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "5fe9659a-8dba-439a-9d6a-f481c3789639.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "95762413-89b9-46c0-99fe-a986aab164d7.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000014",
                "type": "compute",
                "runtime": 11.607,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9259321b-9850-41c7-b7dd-d5fb4d308a41.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "82bd6a6e-d888-4080-8a97-faf5e2125060.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000015",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c37fb8b5-30f4-46bc-b21c-124c7160ded0.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "8bf79989-b16b-49da-9102-f2f7351f8a23.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000016",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9429f6b9-80bc-4631-a4ac-602191725725.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "f1b5e996-5b5f-4657-910b-5018b4794e02.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000017",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "36c99c61-a7a1-4437-b18f-03df4753ccc4.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "e1406dbc-c994-4ecd-b5d4-62f87cb1c663.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000018",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "23e25965-ea85-461b-a788-1e43af7accd2.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "66a87d26-59ff-4558-8343-875f8ab4bfa3.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000019",
                "type": "compute",
                "runtime": 4.14,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "acb81eee-57f2-435f-844a-1b1f60928f34.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "f0b52876-9bc8-4d49-8bd1-1ed1f9cb9a46.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000020",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "68802756-42e3-4563-82e1-554ec9172e3a.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "9580c2bd-81f8-41ff-97a0-2d40f61b668a.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000021",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "1751c6bc-19a0-4587-831f-43e0b2e97c7e.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "7a4d2cd0-0b1d-4a51-9c6f-3a4b13cf58ea.txt",
                        "size": 59
                    }
                ]
            },
            {
                "name": "mDiffFit_00000022",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c5500e57-dfd1-43e4-95eb-cbd3c8f45217.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "919c3d71-3236-4b1c-bee6-40894a2714bf.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000023",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "509b00c7-f1a5-4266-b6cb-16a7e9e80306.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "d254b005-1a75-4b8f-ba52-9e4e30b5b221.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000024",
                "type": "compute",
                "runtime": 0.702,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a435902a-6f33-4290-b2d8-443a9f6144fb.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "4e404c90-f097-493d-884b-f13f29b0450c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000025",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4b30f14f-7a2d-4f2d-a836-834f9b0a0b13.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "2f396d7c-52c9-4de0-a9cf-53ba4bc1be6b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000026",
                "type": "compute",
                "runtime": 29.591,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "8b3525b8-027f-4d5f-9304-f7e27e5e4a71.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "04192efd-ffe1-4ff6-94a8-c8c58cd82013.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000027",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c68e11c4-9532-4b9f-9d97-1e75162e34ec.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "a9f8f195-1195-4d29-ac11-887ad822767d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000028",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d2c3cd35-d76d-4c27-bea8-755b10ef8169.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "31404ea6-a1ad-4c4a-8ed5-3252cac35fcf.txt",
                        "size": 66
                    }
                ]
            },
            {
                "name": "mDiffFit_00000029",
                "type": "compute",
                "runtime": 0.127,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "6c8031ec-c715-424b-9503-34cbf4d7f725.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "f1009ed0-2d0b-4957-947a-6817db79bd4a.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000030",
                "type": "compute",
                "runtime": 3.157,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "afde568b-86a3-423e-a31a-6568be5ab430.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "f3e14aaf-98b1-4f90-b627-2c9e7a37bf29.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000031",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "cb3c2502-6dd5-4d02-9e9c-436aa9938252.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "ad699bab-99e0-4842-9be8-37767cd91b45.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000032",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "741d709e-6109-4cdb-8341-863fb5204dce.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "9af0ed24-2cc3-4d3f-8dd1-0b93c173b07b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000033",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d553458c-7c4d-40e5-b3a0-acf4cec9bca0.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "c9606981-49c9-48db-b84a-692348650cce.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000034",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "211d69f0-21fb-49e8-b28d-396166b7be7c.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "7ce87bd7-5a39-46b9-93a2-a7f3cff0b3dd.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000035",
                "type": "compute",
                "runtime": 0.197,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "161c7f73-22d4-44ed-a9f4-b6fb3c31b73a.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "e4705e76-d11e-4875-83c3-8c701d91c800.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000036",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "447bcf6d-f635-446e-bf96-b882a67cef5a.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "62f3dc0d-d12f-4d61-95d3-0e3e0818bb55.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000037",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "f77b3645-9005-4c3d-af79-64b048b1e4a4.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "89805c12-84cd-42d4-9ae3-e8444691367b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000038",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "f7ab3b6c-675b-47fd-9ab3-68394471b68c.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "a2060eca-2da8-453a-9c8d-e7cd3fc6aa11.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000039",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "5cd5c576-b2e7-451c-80e5-4ccc002772ff.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "4585cb13-7b7e-4b30-a97a-314fcc6f2464.txt",
                        "size": 63
                    }
                ]
            },
            {
                "name": "mDiffFit_00000040",
                "type": "compute",
                "runtime": 0.03,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c2d55b63-8f1e-45a4-9537-45ddbbf9e9d8.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "783b8d5d-0ebd-4c16-9116-3c5e171d6017.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000041",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a1368aab-8685-4a1c-ad73-f3578c189458.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "356e7989-70cd-45d6-b0c0-4f409d138548.txt",
                        "size": 60
                    }
                ]
            },
            {
                "name": "mDiffFit_00000042",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b89997ec-e97e-45a7-8b5f-634fc3d85bd9.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "6a804a8a-15e3-40e3-b89b-ddb84b2ca06c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000043",
                "type": "compute",
                "runtime": 18.725,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c9f4c5e7-768f-42c2-9054-2cd4108181bf.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "b66cdc0d-7caf-4f0b-9ba0-c05934a7a51f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000044",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9fd6b8d4-3eae-4139-ba8d-2736121789bd.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "24d5df92-cde1-4d42-8566-1ce5af24dd52.txt",
                        "size": 66
                    }
                ]
            },
            {
                "name": "mDiffFit_00000045",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "6fe0b6a1-edc2-4b27-a1f1-2ac03353312d.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "ca6f8302-a8f0-4ab5-94c7-219d10f68944.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000046",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "77ad4756-302e-4164-a0bb-07d64b856c64.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "9321d4a6-a4e5-4306-9f62-51756bb35619.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000047",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "47d5ecbc-fe94-414d-9b6b-f9b2ac26976c.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "309ff1ec-a985-42d0-bd54-60e4ae5f2487.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000048",
                "type": "compute",
                "runtime": 0.111,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "87fe2f06-88e1-45c1-912d-ccadcd0d9048.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "94e6ff02-4db4-44dd-a3c7-c7d35266925d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000049",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c304b8bf-8640-40d0-b4bd-b5b644887ea4.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "19443092-ed22-46d6-9c78-3b3725a71640.txt",
                        "size": 58
                    }
                ]
            },
            {
                "name": "mDiffFit_00000050",
                "type": "compute",
                "runtime": 0.029,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4e2e99ae-c124-4b11-9805-e088df194daa.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "d816eb5c-3db7-4b2e-8966-eaa3151e4be8.txt",
                        "size": 56
                    }
                ]
            },
            {
                "name": "mDiffFit_00000051",
                "type": "compute",
                "runtime": 8.945,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "eb728333-f641-4037-bc9e-180d98657976.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "a4f8b93e-585e-41d5-8505-a9634186060c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000052",
                "type": "compute",
                "runtime": 2.211,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "adb7f993-9680-4b0a-a8f4-5dd45e7ef300.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "bdbe4037-1293-4489-9658-a18da4add6e6.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000053",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ef726491-5a35-4284-a5bf-6c55fe84bffb.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "3dde7016-966d-4ea4-ac4a-03973945ca98.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000054",
                "type": "compute",
                "runtime": 5.232,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d0fbe2ee-0af0-46ed-a2a5-be0679c73a7a.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "62e7c7e5-a353-4865-b7d3-eca66edc0774.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000055",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "f0438733-1003-470f-8536-bd93f71dd62b.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "eed4cdee-3c94-4b5f-9169-e663c9fec255.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000056",
                "type": "compute",
                "runtime": 0.153,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "104f1611-06c0-4446-97be-74ecc8c85625.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "fa1d5c14-a5e1-474c-bff5-a8e82cf4c53f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000057",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "814444e4-382b-4115-aad9-07d755c721a7.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "4da19d75-522d-41c5-a7df-fe6d62d75aae.txt",
                        "size": 54
                    }
                ]
            },
            {
                "name": "mDiffFit_00000058",
                "type": "compute",
                "runtime": 0.005,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "30b8314b-bb06-4c92-9d8d-eeb20f3ec5e2.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "57e445bf-8ee1-4ce6-bc14-035ffbd32fbb.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000059",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "6b0090ed-1c2e-42f4-aa99-d49bacd23354.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "ea6ed6fd-fffa-4cc9-95ac-5918197ab4b4.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000060",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b72cab77-4a3d-484f-b03c-9bd0529ce4bb.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "3ef6a771-db2f-4540-97df-fdddcffdd422.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000061",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "391f9d5d-8a24-4f71-bfd8-27ebc84edfab.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "d60eaf03-dd65-46b8-a2b6-c0e3acbdd4e3.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000062",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "63006f38-935b-4dec-96fe-99766d67e168.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "1ba95014-041f-43e2-b703-61bc592cbd75.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000063",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "db14fe50-39a9-4c21-8538-474edae7e72a.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "ea253b6c-c960-43bf-b433-d1c70d854470.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000064",
                "type": "compute",
                "runtime": 6.304,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "8f78e3ce-2d3e-4d9a-a8a2-eea896c7b352.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "d09aa963-00a6-4c2e-9c95-ea05b192c097.txt",
                        "size": 68
                    }
                ]
            },
            {
                "name": "mDiffFit_00000065",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7bdae286-3b64-4bce-be17-e3bc4d632f55.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "b1653785-86cb-4ab9-8054-39a5937bc018.txt",
                        "size": 51
                    }
                ]
            },
            {
                "name": "mDiffFit_00000066",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "49190144-feab-4319-9375-5318c2cbfb92.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "b72c6cc8-2090-4fa0-82d2-913f14ee3707.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000067",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7748a739-7cc3-4fb1-b632-9e12ca5db6c7.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "4591343f-ce8a-4625-b627-c81b09127e08.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000068",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "90b23999-9f02-481a-a542-798a143b2b48.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "e6bddbd1-0aee-4124-98a7-6e84cb101160.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000069",
                "type": "compute",
                "runtime": 0.058,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "dafd6a98-aeef-45af-86fc-1b6d79947516.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "648d92a0-a956-4870-b092-99756099b0da.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000070",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7057ea73-bb3c-4bfd-abb1-2cf1743a5eef.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "610b1ff9-3ad1-4cce-aa00-ce3ba53ee7a3.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000071",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "0468d20a-7b34-4c9a-948e-14c2da806d28.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "b7ec1dab-5744-40d6-bd4f-46ddb9649d5f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000072",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "8bfbe308-de06-4748-b552-771057df5e55.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "8f40dc06-2ebd-4f26-915f-490a9265d27f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000073",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4a6c3773-1e12-4993-b67c-10e8db7ca307.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "c037beff-36b2-4cc2-b16b-732512b507a5.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000074",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "efd7ad22-e9cb-4f65-8112-15296b460575.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "052f7eda-aff7-471c-86b7-766d7b2a421d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000075",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7f288bcc-2dc0-451e-85cc-665193756ee9.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "f44f8aeb-1021-4279-b466-51e3239e4364.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000076",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a77de813-923f-42b8-a05b-ae6e834e80f9.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "db65e8d6-9d40-4b00-a5c4-c0917428ad1b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000077",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "95d07fe6-4c3c-4cbb-a8fd-ef567402af0f.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "13c75638-ff47-4898-be29-a6dae3a69dca.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000078",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "e27fa3ec-04b6-42ea-9396-3db6c851bb65.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "62867a6b-0363-4b49-aeee-a12a7bf776b6.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000079",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb64f746-424c-4466-a8e5-d00bb6d059a4.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "3cf2eea1-42e9-4fa9-9d63-94a481f20bf4.txt",
                        "size": 56
                    }
                ]
            },
            {
                "name": "mDiffFit_00000080",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4f7adfc8-23dd-4d0c-a5ce-66bb489c2867.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "a2c8e01c-d841-4516-84b3-cd6a6d8c0baa.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000081",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b4b61785-6f27-4259-b751-a64835068f2e.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "88ddc801-2e01-4a42-af9d-362d1f1350fa.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000082",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7239d4f9-20a9-4c68-8545-4b823ac95a5f.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "c9db56f8-cdb3-43c8-8f3b-5616bc461d69.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000083",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "97efae01-0016-4af1-a405-b47a2c30047c.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "8b7483f1-c333-46bf-bd40-7902c5ab80f9.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000084",
                "type": "compute",
                "runtime": 0.025,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "7bcee2c8-15a7-4113-9a03-1c34a2a284b8.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "ae6f6f4f-7cb3-4b26-b155-99713dd4c81d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000085",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a10692b5-cb5c-424b-a124-c32f7fd3293b.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "6f19ae5b-8fdb-40f0-a5a3-169772076f48.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000086",
                "type": "compute",
                "runtime": 2.015,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "628c923b-9458-4462-814c-f726b0bfd191.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "acb125b5-b83b-4900-b6c4-5d58eb683836.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000087",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "667bb5ab-bd09-44cf-9696-0b00f5c966cf.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "75a4117d-a19e-458b-83bd-5eff01ad36f8.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000088",
                "type": "compute",
                "runtime": 0.864,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ca2f7a8e-d4bc-4743-bf56-0372fa4650fa.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "370c9d92-96d3-4e23-81d4-00364f8e2003.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000089",
                "type": "compute",
                "runtime": 0.286,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "69789f39-688b-45e0-a16a-73a887ce846f.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "00d2676f-ee4b-4193-8bb6-fb975b8fe559.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000090",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "129af2b7-e2aa-48b6-85c0-5b30a2be2d12.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "5ea0e65b-de9b-40f3-9984-6e3834f043e9.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000091",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "c54bb996-307e-4e1b-b3da-caf9df523a43.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "c145a228-b6e2-472e-837d-d6758cad4ddc.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000092",
                "type": "compute",
                "runtime": 0.055,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "5faf22ea-cc26-4c76-af71-0207c0a88010.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "8e4cda2f-3696-4e38-a4e9-5bcd52d555de.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000093",
                "type": "compute",
                "runtime": 32.96,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b0eaaccc-9e8e-4c14-9906-ffd72c3e9ed8.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "36d56e5b-4c18-4b96-ab7b-279a3c083f11.txt",
                        "size": 61
                    }
                ]
            },
            {
                "name": "mDiffFit_00000094",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "2b50b261-a6cf-4899-8dc1-eebaf9448665.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "22d66517-243c-4f2e-8bfd-63d90268a97c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000095",
                "type": "compute",
                "runtime": 20.625,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "2ecc0377-dd35-4b47-a45d-98e946040870.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "8a6225c0-b17d-4374-a352-1b81eba1aa2b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000096",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "0b5a2299-76dd-4efa-a6d9-3d818e2b254c.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "7fe5f3ae-c934-41d2-a30f-054adbf5339a.txt",
                        "size": 59
                    }
                ]
            },
            {
                "name": "mDiffFit_00000097",
                "type": "compute",
                "runtime": 0.012,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "746dda6e-7688-4102-a462-f1e48d2e350c.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "da363b61-a0b5-4ca9-a3f5-665bf50b302c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000098",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "96b217af-6760-45cf-9096-75ff0d5f7b51.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "5dc83fb1-ea0c-4fae-87d8-477e0053b48e.txt",
                        "size": 60
                    }
                ]
            },
            {
                "name": "mDiffFit_00000099",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "2c2fc2ff-53bc-4bba-af0c-2ec2e209b4c4.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "2caa4d82-2cd6-4bae-97a0-92908f885ae7.txt",
                        "size": 65
                    }
                ]
            },
            {
                "name": "mDiffFit_00000100",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "e1263775-68b7-441a-aa84-1cfd81d8e418.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "478c104c-6a47-4be1-9ece-20b50ddca134.txt",
                        "size": 52
                    }
                ]
            },
            {
                "name": "mDiffFit_00000101",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "e80a85ac-09d6-462c-9416-30fc2f9c2f82.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "82b4c215-9ee4-40b4-8817-baa53aa9be1e.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000102",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "de9bc600-faf7-498e-ab93-8398601d2607.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "d07624b9-90a7-4a12-9e27-6345566d638e.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000103",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "106a6493-6057-46c2-95b6-46aa568ccaf1.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "e8d57032-a71c-4b65-8466-5c2e8c8b561b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000104",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "73add871-e7b1-497b-a22d-109fb21fe23f.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "15d73650-ce75-4d7d-829f-8f20dc12ba48.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000105",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a4cf0186-7ca5-407d-9f68-8e1fa70204b1.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "534f1cdd-7e46-4e38-9ff0-2916249ccd05.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000106",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "2a5cf43d-c327-49bd-b118-5d33c9ea26f6.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "dd1dab03-e49c-4854-a4f6-7ace53e3b837.txt",
                        "size": 59
                    }
                ]
            },
            {
                "name": "mDiffFit_00000107",
                "type": "compute",
                "runtime": 0.005,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "6c4a8472-3616-4348-adfa-0dd5548414d2.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "a85b345b-4d1c-4293-8307-d89562d202a9.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000108",
                "type": "compute",
                "runtime": 13.504,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9f430d50-5ce8-4847-9edf-7fa98dd4ecd3.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "a697eca2-74bc-44f4-bdab-08cd4bb4c604.txt",
                        "size": 61
                    }
                ]
            },
            {
                "name": "mDiffFit_00000109",
                "type": "compute",
                "runtime": 33.974,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4c46e37c-c5a5-43fc-af38-1cc3139d1df5.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "dfaa3f19-c092-4535-8e51-035a702d7113.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000110",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4d0f79df-d7b8-4cad-8738-eeabde13a165.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "2989987b-1047-4d21-a190-5cb8c1f817da.txt",
                        "size": 66
                    }
                ]
            },
            {
                "name": "mDiffFit_00000111",
                "type": "compute",
                "runtime": 0.009,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "bbd3fae5-9c86-453c-83c8-a67e48383fa5.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "eda7cb22-f7bd-49f6-ac67-a2f78a774f8f.txt",
                        "size": 64
                    }
                ]
            },
            {
                "name": "mDiffFit_00000112",
                "type": "compute",
                "runtime": 0.325,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "00bfd6cb-fb36-4cfc-b986-25656c15a7a6.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "cef8f491-b45d-40cb-af3c-ed5ba7193793.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000113",
                "type": "compute",
                "runtime": 11.469,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "297acca5-3e84-4799-8fe1-4f4f3449262d.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "5236e3f9-8dcb-4f07-b3f8-35321c3389ae.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000114",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "f906b374-4d3f-47dc-8661-9e52d72dd0fd.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "d307f8c4-dce4-476b-93ff-8d8d071e539d.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000115",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "95f0ea03-edc6-4254-bf1b-eb6ef8312b2c.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "938947e7-a71f-490e-a7d8-e673e758383f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000116",
                "type": "compute",
                "runtime": 23.944,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b95d8bd2-762b-491a-ba61-63be3b971008.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "ecf4498c-465f-45fc-b47d-d98707087b1c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000117",
                "type": "compute",
                "runtime": 0.032,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4b58df76-f6a6-4448-bf1d-417524b55adf.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "8275ae59-ba2f-435b-b3a5-8e43261e9c8c.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000118",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "99aec273-2d6e-4fe8-91d2-3b55a576780f.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "9bdc5827-a2ee-47ba-8408-0f8c89185990.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000119",
                "type": "compute",
                "runtime": 3.511,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "98c717c7-e923-40df-8fda-a3aa3720d26c.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "86ec9734-1cbc-4109-8b07-060900bc444f.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000120",
                "type": "compute",
                "runtime": 0.004,
                "parents": [
                    "mProject_00000003",
                    "mProject_00000004"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9f924fbf-cfc1-43cd-b395-23db4a39da50.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "b850457e-7d08-4e12-adcf-ea06b0f9c9c1.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000121",
                "type": "compute",
                "runtime": 30.625,
                "parents": [
                    "mProject_00000002",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "cc1bfcdd-56ae-4fb2-9240-850f1b625351.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "95be397f-2a6a-4d63-8d81-c08990b20263.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000122",
                "type": "compute",
                "runtime": 2.003,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000003"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "e86b7ac1-7083-45f1-b574-1e8a4ce431f0.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "aa8622eb-33b2-48cd-9518-be29ba05a182.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000123",
                "type": "compute",
                "runtime": 0.033,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ed6d9186-d349-400e-aeb9-212af9cef854.hdr",
                        "size": 279
                    },
                    {
                        "link": "output",
                        "name": "d3d967c2-20e0-44d1-8c3f-6aff178a9c5b.txt",
                        "size": 50
                    }
                ]
            },
            {
                "name": "mDiffFit_00000124",
                "type": "compute",
                "runtime": 21.934,
                "parents": [
                    "mProject_00000001",
                    "mProject_00000002"
                ],
                "children": [
                    "mConcatFit_00000125"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "bbb86aaa-5f07-40bd-a16e-a0635ab0128a.hdr",
                        "size": 277
                    },
                    {
                        "link": "output",
                        "name": "607a87ca-7c0c-482b-8178-5f9f74e278f9.txt",
                        "size": 52
                    }
                ]
            },
            {
                "name": "mConcatFit_00000125",
                "type": "compute",
                "runtime": 1.754,
                "parents": [
                    "mDiffFit_00000005",
                    "mDiffFit_00000006",
                    "mDiffFit_00000007",
                    "mDiffFit_00000008",
                    "mDiffFit_00000009",
                    "mDiffFit_00000010",
                    "mDiffFit_00000011",
                    "mDiffFit_00000012",
                    "mDiffFit_00000013",
                    "mDiffFit_00000014",
                    "mDiffFit_00000015",
                    "mDiffFit_00000016",
                    "mDiffFit_00000017",
                    "mDiffFit_00000018",
                    "mDiffFit_00000019",
                    "mDiffFit_00000020",
                    "mDiffFit_00000021",
                    "mDiffFit_00000022",
                    "mDiffFit_00000023",
                    "mDiffFit_00000024",
                    "mDiffFit_00000025",
                    "mDiffFit_00000026",
                    "mDiffFit_00000027",
                    "mDiffFit_00000028",
                    "mDiffFit_00000029",
                    "mDiffFit_00000030",
                    "mDiffFit_00000031",
                    "mDiffFit_00000032",
                    "mDiffFit_00000033",
                    "mDiffFit_00000034",
                    "mDiffFit_00000035",
                    "mDiffFit_00000036",
                    "mDiffFit_00000037",
                    "mDiffFit_00000038",
                    "mDiffFit_00000039",
                    "mDiffFit_00000040",
                    "mDiffFit_00000041",
                    "mDiffFit_00000042",
                    "mDiffFit_00000043",
                    "mDiffFit_00000044",
                    "mDiffFit_00000045",
                    "mDiffFit_00000046",
                    "mDiffFit_00000047",
                    "mDiffFit_00000048",
                    "mDiffFit_00000049",
                    "mDiffFit_00000050",
                    "mDiffFit_00000051",
                    "mDiffFit_00000052",
                    "mDiffFit_00000053",
                    "mDiffFit_00000054",
                    "mDiffFit_00000055",
                    "mDiffFit_00000056",
                    "mDiffFit_00000057",
                    "mDiffFit_00000058",
                    "mDiffFit_00000059",
                    "mDiffFit_00000060",
                    "mDiffFit_00000061",
                    "mDiffFit_00000062",
                    "mDiffFit_00000063",
                    "mDiffFit_00000064",
                    "mDiffFit_00000065",
                    "mDiffFit_00000066",
                    "mDiffFit_00000067",
                    "mDiffFit_00000068",
                    "mDiffFit_00000069",
                    "mDiffFit_00000070",
                    "mDiffFit_00000071",
                    "mDiffFit_00000072",
                    "mDiffFit_00000073",
                    "mDiffFit_00000074",
                    "mDiffFit_00000075",
                    "mDiffFit_00000076",
                    "mDiffFit_00000077",
                    "mDiffFit_00000078",
                    "mDiffFit_00000079",
                    "mDiffFit_00000080",
                    "mDiffFit_00000081",
                    "mDiffFit_00000082",
                    "mDiffFit_00000083",
                    "mDiffFit_00000084",
                    "mDiffFit_00000085",
                    "mDiffFit_00000086",
                    "mDiffFit_00000087",
                    "mDiffFit_00000088",
                    "mDiffFit_00000089",
                    "mDiffFit_00000090",
                    "mDiffFit_00000091",
                    "mDiffFit_00000092",
                    "mDiffFit_00000093",
                    "mDiffFit_00000094",
                    "mDiffFit_00000095",
                    "mDiffFit_00000096",
                    "mDiffFit_00000097",
                    "mDiffFit_00000098",
                    "mDiffFit_00000099",
                    "mDiffFit_00000100",
                    "mDiffFit_00000101",
                    "mDiffFit_00000102",
                    "mDiffFit_00000103",
                    "mDiffFit_00000104",
                    "mDiffFit_00000105",
                    "mDiffFit_00000106",
                    "mDiffFit_00000107",
                    "mDiffFit_00000108",
                    "mDiffFit_00000109",
                    "mDiffFit_00000110",
                    "mDiffFit_00000111",
                    "mDiffFit_00000112",
                    "mDiffFit_00000113",
                    "mDiffFit_00000114",
                    "mDiffFit_00000115",
                    "mDiffFit_00000116",
                    "mDiffFit_00000117",
                    "mDiffFit_00000118",
                    "mDiffFit_00000119",
                    "mDiffFit_00000120",
                    "mDiffFit_00000121",
                    "mDiffFit_00000122",
                    "mDiffFit_00000123",
                    "mDiffFit_00000124"
                ],
                "children": [
                    "mBgModel_00000126"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "59c970fd-eb4a-4ced-90f2-2c8a517d629b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "12b4ac99-c3fd-4b48-a090-8f894d168a28.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "35b6cb90-9427-4240-a2ab-9938a55b4760.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "e4c9e53e-1429-479b-9c5d-e18e90cfb1cd.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "59ecfa9a-80a8-4723-95ee-836f227d7203.txt",
                        "size": 63
                    },
                    {
                        "link": "input",
                        "name": "6aa15f53-0604-4aca-bfed-6fac84782e65.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "326a712b-238b-468c-8ac1-78933f73282d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ded98459-133e-4672-864c-0c0893ca99c6.txt",
                        "size": 56
                    },
                    {
                        "link": "input",
                        "name": "95762413-89b9-46c0-99fe-a986aab164d7.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "82bd6a6e-d888-4080-8a97-faf5e2125060.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8bf79989-b16b-49da-9102-f2f7351f8a23.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "f1b5e996-5b5f-4657-910b-5018b4794e02.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "e1406dbc-c994-4ecd-b5d4-62f87cb1c663.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "66a87d26-59ff-4558-8343-875f8ab4bfa3.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "f0b52876-9bc8-4d49-8bd1-1ed1f9cb9a46.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "9580c2bd-81f8-41ff-97a0-2d40f61b668a.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "7a4d2cd0-0b1d-4a51-9c6f-3a4b13cf58ea.txt",
                        "size": 59
                    },
                    {
                        "link": "input",
                        "name": "919c3d71-3236-4b1c-bee6-40894a2714bf.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d254b005-1a75-4b8f-ba52-9e4e30b5b221.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "4e404c90-f097-493d-884b-f13f29b0450c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "2f396d7c-52c9-4de0-a9cf-53ba4bc1be6b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "04192efd-ffe1-4ff6-94a8-c8c58cd82013.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "a9f8f195-1195-4d29-ac11-887ad822767d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "31404ea6-a1ad-4c4a-8ed5-3252cac35fcf.txt",
                        "size": 66
                    },
                    {
                        "link": "input",
                        "name": "f1009ed0-2d0b-4957-947a-6817db79bd4a.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "f3e14aaf-98b1-4f90-b627-2c9e7a37bf29.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ad699bab-99e0-4842-9be8-37767cd91b45.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "9af0ed24-2cc3-4d3f-8dd1-0b93c173b07b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "c9606981-49c9-48db-b84a-692348650cce.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "7ce87bd7-5a39-46b9-93a2-a7f3cff0b3dd.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "e4705e76-d11e-4875-83c3-8c701d91c800.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "62f3dc0d-d12f-4d61-95d3-0e3e0818bb55.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "89805c12-84cd-42d4-9ae3-e8444691367b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "a2060eca-2da8-453a-9c8d-e7cd3fc6aa11.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "4585cb13-7b7e-4b30-a97a-314fcc6f2464.txt",
                        "size": 63
                    },
                    {
                        "link": "input",
                        "name": "783b8d5d-0ebd-4c16-9116-3c5e171d6017.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "356e7989-70cd-45d6-b0c0-4f409d138548.txt",
                        "size": 60
                    },
                    {
                        "link": "input",
                        "name": "6a804a8a-15e3-40e3-b89b-ddb84b2ca06c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "b66cdc0d-7caf-4f0b-9ba0-c05934a7a51f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "24d5df92-cde1-4d42-8566-1ce5af24dd52.txt",
                        "size": 66
                    },
                    {
                        "link": "input",
                        "name": "ca6f8302-a8f0-4ab5-94c7-219d10f68944.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "9321d4a6-a4e5-4306-9f62-51756bb35619.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "309ff1ec-a985-42d0-bd54-60e4ae5f2487.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "94e6ff02-4db4-44dd-a3c7-c7d35266925d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "19443092-ed22-46d6-9c78-3b3725a71640.txt",
                        "size": 58
                    },
                    {
                        "link": "input",
                        "name": "d816eb5c-3db7-4b2e-8966-eaa3151e4be8.txt",
                        "size": 56
                    },
                    {
                        "link": "input",
                        "name": "a4f8b93e-585e-41d5-8505-a9634186060c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "bdbe4037-1293-4489-9658-a18da4add6e6.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "3dde7016-966d-4ea4-ac4a-03973945ca98.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "62e7c7e5-a353-4865-b7d3-eca66edc0774.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "eed4cdee-3c94-4b5f-9169-e663c9fec255.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "fa1d5c14-a5e1-474c-bff5-a8e82cf4c53f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "4da19d75-522d-41c5-a7df-fe6d62d75aae.txt",
                        "size": 54
                    },
                    {
                        "link": "input",
                        "name": "57e445bf-8ee1-4ce6-bc14-035ffbd32fbb.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ea6ed6fd-fffa-4cc9-95ac-5918197ab4b4.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "3ef6a771-db2f-4540-97df-fdddcffdd422.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d60eaf03-dd65-46b8-a2b6-c0e3acbdd4e3.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "1ba95014-041f-43e2-b703-61bc592cbd75.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ea253b6c-c960-43bf-b433-d1c70d854470.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d09aa963-00a6-4c2e-9c95-ea05b192c097.txt",
                        "size": 68
                    },
                    {
                        "link": "input",
                        "name": "b1653785-86cb-4ab9-8054-39a5937bc018.txt",
                        "size": 51
                    },
                    {
                        "link": "input",
                        "name": "b72c6cc8-2090-4fa0-82d2-913f14ee3707.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "4591343f-ce8a-4625-b627-c81b09127e08.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "e6bddbd1-0aee-4124-98a7-6e84cb101160.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "648d92a0-a956-4870-b092-99756099b0da.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "610b1ff9-3ad1-4cce-aa00-ce3ba53ee7a3.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "b7ec1dab-5744-40d6-bd4f-46ddb9649d5f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8f40dc06-2ebd-4f26-915f-490a9265d27f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "c037beff-36b2-4cc2-b16b-732512b507a5.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "052f7eda-aff7-471c-86b7-766d7b2a421d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "f44f8aeb-1021-4279-b466-51e3239e4364.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "db65e8d6-9d40-4b00-a5c4-c0917428ad1b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "13c75638-ff47-4898-be29-a6dae3a69dca.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "62867a6b-0363-4b49-aeee-a12a7bf776b6.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "3cf2eea1-42e9-4fa9-9d63-94a481f20bf4.txt",
                        "size": 56
                    },
                    {
                        "link": "input",
                        "name": "a2c8e01c-d841-4516-84b3-cd6a6d8c0baa.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "88ddc801-2e01-4a42-af9d-362d1f1350fa.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "c9db56f8-cdb3-43c8-8f3b-5616bc461d69.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8b7483f1-c333-46bf-bd40-7902c5ab80f9.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ae6f6f4f-7cb3-4b26-b155-99713dd4c81d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "6f19ae5b-8fdb-40f0-a5a3-169772076f48.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "acb125b5-b83b-4900-b6c4-5d58eb683836.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "75a4117d-a19e-458b-83bd-5eff01ad36f8.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "370c9d92-96d3-4e23-81d4-00364f8e2003.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "00d2676f-ee4b-4193-8bb6-fb975b8fe559.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "5ea0e65b-de9b-40f3-9984-6e3834f043e9.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "c145a228-b6e2-472e-837d-d6758cad4ddc.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8e4cda2f-3696-4e38-a4e9-5bcd52d555de.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "36d56e5b-4c18-4b96-ab7b-279a3c083f11.txt",
                        "size": 61
                    },
                    {
                        "link": "input",
                        "name": "22d66517-243c-4f2e-8bfd-63d90268a97c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8a6225c0-b17d-4374-a352-1b81eba1aa2b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "7fe5f3ae-c934-41d2-a30f-054adbf5339a.txt",
                        "size": 59
                    },
                    {
                        "link": "input",
                        "name": "da363b61-a0b5-4ca9-a3f5-665bf50b302c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "5dc83fb1-ea0c-4fae-87d8-477e0053b48e.txt",
                        "size": 60
                    },
                    {
                        "link": "input",
                        "name": "2caa4d82-2cd6-4bae-97a0-92908f885ae7.txt",
                        "size": 65
                    },
                    {
                        "link": "input",
                        "name": "478c104c-6a47-4be1-9ece-20b50ddca134.txt",
                        "size": 52
                    },
                    {
                        "link": "input",
                        "name": "82b4c215-9ee4-40b4-8817-baa53aa9be1e.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d07624b9-90a7-4a12-9e27-6345566d638e.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "e8d57032-a71c-4b65-8466-5c2e8c8b561b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "15d73650-ce75-4d7d-829f-8f20dc12ba48.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "534f1cdd-7e46-4e38-9ff0-2916249ccd05.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "dd1dab03-e49c-4854-a4f6-7ace53e3b837.txt",
                        "size": 59
                    },
                    {
                        "link": "input",
                        "name": "a85b345b-4d1c-4293-8307-d89562d202a9.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "a697eca2-74bc-44f4-bdab-08cd4bb4c604.txt",
                        "size": 61
                    },
                    {
                        "link": "input",
                        "name": "dfaa3f19-c092-4535-8e51-035a702d7113.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "2989987b-1047-4d21-a190-5cb8c1f817da.txt",
                        "size": 66
                    },
                    {
                        "link": "input",
                        "name": "eda7cb22-f7bd-49f6-ac67-a2f78a774f8f.txt",
                        "size": 64
                    },
                    {
                        "link": "input",
                        "name": "cef8f491-b45d-40cb-af3c-ed5ba7193793.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "5236e3f9-8dcb-4f07-b3f8-35321c3389ae.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d307f8c4-dce4-476b-93ff-8d8d071e539d.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "938947e7-a71f-490e-a7d8-e673e758383f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "ecf4498c-465f-45fc-b47d-d98707087b1c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "8275ae59-ba2f-435b-b3a5-8e43261e9c8c.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "9bdc5827-a2ee-47ba-8408-0f8c89185990.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "86ec9734-1cbc-4109-8b07-060900bc444f.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "b850457e-7d08-4e12-adcf-ea06b0f9c9c1.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "95be397f-2a6a-4d63-8d81-c08990b20263.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "aa8622eb-33b2-48cd-9518-be29ba05a182.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "d3d967c2-20e0-44d1-8c3f-6aff178a9c5b.txt",
                        "size": 50
                    },
                    {
                        "link": "input",
                        "name": "607a87ca-7c0c-482b-8178-5f9f74e278f9.txt",
                        "size": 52
                    },
                    {
                        "link": "input",
                        "name": "043470df-aad5-4155-9fe2-6975d3654c3e.tbl",
                        "size": 1160
                    },
                    {
                        "link": "output",
                        "name": "cbc38192-6382-4a36-91a8-11fc761a9c70.tbl",
                        "size": 1457
                    }
                ]
            },
            {
                "name": "mBgModel_00000126",
                "type": "compute",
                "runtime": 6.696,
                "parents": [
                    "mConcatFit_00000125"
                ],
                "children": [
                    "mBackground_00000127",
                    "mBackground_00000128",
                    "mBackground_00000129",
                    "mBackground_00000130"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "cbc38192-6382-4a36-91a8-11fc761a9c70.tbl",
                        "size": 1457
                    },
                    {
                        "link": "output",
                        "name": "9ec646f3-6b95-4d06-9240-44182c0f9320.tbl",
                        "size": 276
                    }
                ]
            },
            {
                "name": "mBackground_00000127",
                "type": "compute",
                "runtime": 0.592,
                "parents": [
                    "mBgModel_00000126"
                ],
                "children": [
                    "mImgtbl_00000131"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "688c72b6-eded-42b0-b0d9-821a7ad6ba65.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "61e0ef4f-f022-4cd8-a803-43255562da16.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9ec646f3-6b95-4d06-9240-44182c0f9320.tbl",
                        "size": 276
                    },
                    {
                        "link": "output",
                        "name": "36e026f7-4872-44b8-9ca3-fed2b4f7179d.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "b1c59a07-b521-4c77-886d-2b82f3711aad.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mBackground_00000128",
                "type": "compute",
                "runtime": 4.958,
                "parents": [
                    "mBgModel_00000126"
                ],
                "children": [
                    "mImgtbl_00000131"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d6c5a2ca-0c56-43aa-8fce-3d712214135c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "4505454b-5748-46dd-896e-a271b403ad4b.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9ec646f3-6b95-4d06-9240-44182c0f9320.tbl",
                        "size": 276
                    },
                    {
                        "link": "output",
                        "name": "86015e1e-2dd4-44a4-912c-738a15db7944.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "33c40e68-f057-403e-8b23-220b181bc602.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mBackground_00000129",
                "type": "compute",
                "runtime": 96.702,
                "parents": [
                    "mBgModel_00000126"
                ],
                "children": [
                    "mImgtbl_00000131"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b824d0f9-a3cd-4116-8973-0cd5838d65e7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "a8e6e648-aa8d-4eea-b149-cbe6b302a8e3.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9ec646f3-6b95-4d06-9240-44182c0f9320.tbl",
                        "size": 276
                    },
                    {
                        "link": "output",
                        "name": "952217e5-615b-419c-8d70-15ab141a37a8.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "b66fe765-f131-4c1a-a28a-f89126e268dc.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mBackground_00000130",
                "type": "compute",
                "runtime": 36.728,
                "parents": [
                    "mBgModel_00000126"
                ],
                "children": [
                    "mImgtbl_00000131"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb13ea61-647b-47b0-a6e8-91241e1d85d7.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "ee9e443c-9e76-4acc-8343-6beb4374567c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9ec646f3-6b95-4d06-9240-44182c0f9320.tbl",
                        "size": 276
                    },
                    {
                        "link": "output",
                        "name": "9fe7a7fb-8420-42f7-a67a-e89d7162ee30.fits",
                        "size": 15373440
                    },
                    {
                        "link": "output",
                        "name": "0536c6ae-3b23-4331-96b8-aa32301f9c2c.fits",
                        "size": 15373440
                    }
                ]
            },
            {
                "name": "mImgtbl_00000131",
                "type": "compute",
                "runtime": 0.389,
                "parents": [
                    "mBackground_00000127",
                    "mBackground_00000128",
                    "mBackground_00000129",
                    "mBackground_00000130"
                ],
                "children": [
                    "mAdd_00000132"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36e026f7-4872-44b8-9ca3-fed2b4f7179d.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "86015e1e-2dd4-44a4-912c-738a15db7944.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "952217e5-615b-419c-8d70-15ab141a37a8.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9fe7a7fb-8420-42f7-a67a-e89d7162ee30.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b2fd7f6b-f7ea-4806-acb8-34be6d133d17.tbl",
                        "size": 940
                    },
                    {
                        "link": "output",
                        "name": "73a31786-bfc1-4cba-8b50-f92b06dbcba6.tbl",
                        "size": 2594
                    }
                ]
            },
            {
                "name": "mAdd_00000132",
                "type": "compute",
                "runtime": 12.023,
                "parents": [
                    "mImgtbl_00000131"
                ],
                "children": [
                    "mViewer_00000133"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36e026f7-4872-44b8-9ca3-fed2b4f7179d.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b1c59a07-b521-4c77-886d-2b82f3711aad.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "86015e1e-2dd4-44a4-912c-738a15db7944.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "33c40e68-f057-403e-8b23-220b181bc602.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "952217e5-615b-419c-8d70-15ab141a37a8.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "b66fe765-f131-4c1a-a28a-f89126e268dc.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "9fe7a7fb-8420-42f7-a67a-e89d7162ee30.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "0536c6ae-3b23-4331-96b8-aa32301f9c2c.fits",
                        "size": 15373440
                    },
                    {
                        "link": "input",
                        "name": "114686fe-c1c0-41ac-9b1f-132a6761317e.tbl",
                        "size": 2594
                    },
                    {
                        "link": "input",
                        "name": "4d03ac8f-568f-441b-bede-03476b98833e.hdr",
                        "size": 275
                    },
                    {
                        "link": "output",
                        "name": "a67ef354-2bf2-4d12-a68a-46de3beaba9e.fits",
                        "size": 25922880
                    },
                    {
                        "link": "output",
                        "name": "7ad6f0cd-10af-4839-a109-b36c9fc401d9.fits",
                        "size": 25922880
                    }
                ]
            },
            {
                "name": "mViewer_00000133",
                "type": "compute",
                "runtime": 15.975,
                "parents": [
                    "mAdd_00000132"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "7ad6f0cd-10af-4839-a109-b36c9fc401d9.fits",
                        "size": 25922880
                    },
                    {
                        "link": "output",
                        "name": "fb4eda29-c1a0-4e64-b28d-90c385dc9915.jpg",
                        "size": 983389
                    }
                ]
            }
        ]
    }
}