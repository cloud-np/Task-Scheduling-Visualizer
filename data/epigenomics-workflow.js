export default {
    "name": "Epigenomics-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2020-10-30T09:40:49.418447",
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
        "executedAt": "20201030T114049+0200",
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
                "name": "fastqSplit_00000001",
                "type": "compute",
                "runtime": 21.061,
                "parents": [],
                "children": [
                    "filterContams_00000002",
                    "filterContams_00000006",
                    "filterContams_00000010",
                    "filterContams_00000014",
                    "filterContams_00000018",
                    "filterContams_00000022",
                    "filterContams_00000026",
                    "filterContams_00000030",
                    "filterContams_00000034",
                    "filterContams_00000038",
                    "filterContams_00000042"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "7c49d0f3-3ff4-4b2b-949b-b421b84d4422.sfq",
                        "size": 109431824
                    },
                    {
                        "link": "output",
                        "name": "6c4b38fa-a747-4eab-8589-65b1f24bfdd0.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "280814ef-e77a-4724-87f0-37c283c0f65e.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "a7b1b58b-d4b5-4288-931c-d1c39eb5102f.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "581570c3-03f7-4ab8-affd-ff387916e58a.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "2b7ade41-757e-45d6-9a73-0962b621803f.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "0f385c64-a64f-47b0-a3d2-fdec0156b741.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "fb700e2d-a10a-4173-aadc-246178973987.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "680be11e-f6d0-446a-b328-0032518f36a0.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "05535110-0d35-4548-8065-359cc94cf11b.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "1c7d35b6-fefb-4ea0-aec7-550aef524e95.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "f93c2974-76fc-4e73-9eab-0c8461aa50ba.sfq",
                        "size": 385300
                    }
                ]
            },
            {
                "name": "filterContams_00000002",
                "type": "compute",
                "runtime": 20.261,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000003"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "6c4b38fa-a747-4eab-8589-65b1f24bfdd0.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "ab2d785e-dfcd-4ab5-b72b-be5ec81ea928.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000003",
                "type": "compute",
                "runtime": 0.454,
                "parents": [
                    "filterContams_00000002"
                ],
                "children": [
                    "fast2bfq_00000004"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ab2d785e-dfcd-4ab5-b72b-be5ec81ea928.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "c4a494f7-8468-46ad-a344-6f612340e9dbmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "7d4fa30a-7d24-4028-91a5-8c738e511514maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "be275c3d-ac2f-44e9-b6c7-6f234c68ae9f.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000004",
                "type": "compute",
                "runtime": 6.889,
                "parents": [
                    "sol2sanger_00000003"
                ],
                "children": [
                    "map_00000005"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "be275c3d-ac2f-44e9-b6c7-6f234c68ae9f.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "82a7ff98-b064-49ee-98a9-5e984c08bc9bmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "a4fa5e16-1501-49fa-8a33-e2aea90af86bmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "ce37a6be-1a56-48eb-a7df-155e62dec39b.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000005",
                "type": "compute",
                "runtime": 61.331,
                "parents": [
                    "fast2bfq_00000004"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ce37a6be-1a56-48eb-a7df-155e62dec39b.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "d83acb22-9fcf-49cf-8469-60d10fb317f7maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "159a2a47-ef71-42c0-8142-6551d7d3dc22maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "ace9ff49-abcf-42d3-84f7-cb6229a24162.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "4b4220dc-ff03-4297-8634-ee4325056bb9.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000006",
                "type": "compute",
                "runtime": 47.417,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000007"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "280814ef-e77a-4724-87f0-37c283c0f65e.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "cb10b23a-6c5d-4937-9153-40e3b1135dfd.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000007",
                "type": "compute",
                "runtime": 0.477,
                "parents": [
                    "filterContams_00000006"
                ],
                "children": [
                    "fast2bfq_00000008"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "cb10b23a-6c5d-4937-9153-40e3b1135dfd.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "c046a92e-4ee7-486b-aca0-919f13560208maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "360454cf-303c-4d06-82c3-e67ee42d640bmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "d76a9d89-8878-49be-8f8a-52cc058ec49b.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000008",
                "type": "compute",
                "runtime": 0.347,
                "parents": [
                    "sol2sanger_00000007"
                ],
                "children": [
                    "map_00000009"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d76a9d89-8878-49be-8f8a-52cc058ec49b.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "3d09f99b-3380-4959-8f4f-3f3922061465maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "a003461f-bc1d-4020-9e74-fe76151bd115maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "d56c4607-2cf7-44ca-affd-d716934b9f70.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000009",
                "type": "compute",
                "runtime": 47.096,
                "parents": [
                    "fast2bfq_00000008"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d56c4607-2cf7-44ca-affd-d716934b9f70.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "b9adb399-695d-4e6e-8c0f-3bbc851f893cmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "3e4bdba8-27ee-4e74-bc62-22c1abf69decmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "d0825c2d-e77c-4d09-b414-7de34b7c46b6.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "19100d9a-f434-48ed-976c-4bc580a90585.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000010",
                "type": "compute",
                "runtime": 3.315,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000011"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a7b1b58b-d4b5-4288-931c-d1c39eb5102f.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "93957f98-c9f6-4655-8711-a28fd5108045.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000011",
                "type": "compute",
                "runtime": 2.16,
                "parents": [
                    "filterContams_00000010"
                ],
                "children": [
                    "fast2bfq_00000012"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "93957f98-c9f6-4655-8711-a28fd5108045.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "804bd295-4f67-4c58-80a5-bfd2d78e1698maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "137ef2e4-9d1a-44f6-9613-bcbe3fcdf527maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "ed315c6f-07f0-4fdc-92a8-5e1733581bc8.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000012",
                "type": "compute",
                "runtime": 5.067,
                "parents": [
                    "sol2sanger_00000011"
                ],
                "children": [
                    "map_00000013"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ed315c6f-07f0-4fdc-92a8-5e1733581bc8.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "927c79f4-3dec-4676-b9d7-dcc0ff8c8267maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "f8d6fbfd-f307-4ee9-ae6b-5396f0f49be7maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "da2e3205-c1f9-4397-a754-008475a4cb9e.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000013",
                "type": "compute",
                "runtime": 64.776,
                "parents": [
                    "fast2bfq_00000012"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "da2e3205-c1f9-4397-a754-008475a4cb9e.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "f03b398c-9004-44ee-b096-6f6f00b09f6cmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "28841cbb-7dbf-4ae4-bae0-08c1bad05359maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "0158fa6b-f59f-4734-a2d8-dcebc7166a18.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "11bf188b-30bd-47c9-8d63-356eeb07be54.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000014",
                "type": "compute",
                "runtime": 0.604,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000015"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "581570c3-03f7-4ab8-affd-ff387916e58a.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "df480e94-0baa-4263-a44f-2ec74934163a.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000015",
                "type": "compute",
                "runtime": 2.052,
                "parents": [
                    "filterContams_00000014"
                ],
                "children": [
                    "fast2bfq_00000016"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "df480e94-0baa-4263-a44f-2ec74934163a.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "9d70774f-9dd1-4855-9a2a-c77b2b4c12a5maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "43309e2c-de45-4449-b13c-55ce72916791maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "33157418-c65f-43e5-a963-3ccca2f2721e.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000016",
                "type": "compute",
                "runtime": 2.587,
                "parents": [
                    "sol2sanger_00000015"
                ],
                "children": [
                    "map_00000017"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "33157418-c65f-43e5-a963-3ccca2f2721e.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "f4830d31-6af9-4d95-aa94-06784ec7dbbfmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "9cc3fc44-0950-45e0-8805-2acf6bd7bd4bmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "a2dd580b-307f-4c70-bb84-1c6a9de7b31d.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000017",
                "type": "compute",
                "runtime": 58.272,
                "parents": [
                    "fast2bfq_00000016"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a2dd580b-307f-4c70-bb84-1c6a9de7b31d.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "5f29d6e6-9d84-4636-887b-8df7acafed38maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "221555aa-c88d-45c5-beb2-2d3598ab0eb3maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "bc3ac456-d770-453d-848a-a42d52e51378.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "813fe295-8a4b-4e09-b58e-836871edecdf.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000018",
                "type": "compute",
                "runtime": 0.284,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000019"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "2b7ade41-757e-45d6-9a73-0962b621803f.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "53382eb4-cd6b-43eb-a8e0-45611ad6094c.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000019",
                "type": "compute",
                "runtime": 1.462,
                "parents": [
                    "filterContams_00000018"
                ],
                "children": [
                    "fast2bfq_00000020"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "53382eb4-cd6b-43eb-a8e0-45611ad6094c.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "f8c956f0-a492-47ee-8272-c04d9375cb65maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "09fe12a2-e05e-4876-97e9-d2e5af2dee87maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "7530bf46-beae-4c46-98d6-c33c85823728.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000020",
                "type": "compute",
                "runtime": 0.033,
                "parents": [
                    "sol2sanger_00000019"
                ],
                "children": [
                    "map_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "7530bf46-beae-4c46-98d6-c33c85823728.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "bfbdfc55-f496-4602-af79-78bc66dda725maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "189868ec-1586-4568-acde-f01ca57283eemaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "67a7d1ee-02b2-4e9b-930f-43d72bb21fe9.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000021",
                "type": "compute",
                "runtime": 53.012,
                "parents": [
                    "fast2bfq_00000020"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "67a7d1ee-02b2-4e9b-930f-43d72bb21fe9.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "2bf64dd0-2268-404c-bddc-b2ea86127f39maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "87b64427-0444-4013-839f-b66ae751d82amaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "1f40be7f-5df9-44cd-9ee8-4d33c51f9f88.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "f442562c-9ae7-4df0-ad45-d7072988894c.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000022",
                "type": "compute",
                "runtime": 4.489,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000023"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "0f385c64-a64f-47b0-a3d2-fdec0156b741.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "9fbfb440-3984-4dcf-875a-bf2795f15a2f.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000023",
                "type": "compute",
                "runtime": 11.007,
                "parents": [
                    "filterContams_00000022"
                ],
                "children": [
                    "fast2bfq_00000024"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9fbfb440-3984-4dcf-875a-bf2795f15a2f.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "ff7403ea-e312-4135-9af0-0f2b898c4a50maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "4189a3f5-9bde-4c63-a7ae-a2e8a9d72a01maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "517d03eb-5ff1-474c-a0cf-b26c4fc919ec.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000024",
                "type": "compute",
                "runtime": 8.277,
                "parents": [
                    "sol2sanger_00000023"
                ],
                "children": [
                    "map_00000025"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "517d03eb-5ff1-474c-a0cf-b26c4fc919ec.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "1e3839ff-53c4-48f4-82ef-a865a5c2ac4cmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "63079b61-de9f-4059-bae8-f566dfcd1ea7maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "bb9a7217-e995-4b94-9773-cc132a35d940.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000025",
                "type": "compute",
                "runtime": 27.261,
                "parents": [
                    "fast2bfq_00000024"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bb9a7217-e995-4b94-9773-cc132a35d940.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "37368ee7-a2a9-4fd4-830a-6e2d8f1ab6f8maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "dc40e6a2-1aff-4ae5-84bc-222f63b3a25bmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "94d493d5-11fe-482a-ad6d-eb1af5e76daa.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "2ddfdaf4-bfe2-4cb7-acf2-4bea5ce17d37.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000026",
                "type": "compute",
                "runtime": 39.058,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000027"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fb700e2d-a10a-4173-aadc-246178973987.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "ebc52aa1-2897-4985-9e47-f4c47df054e9.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000027",
                "type": "compute",
                "runtime": 14.058,
                "parents": [
                    "filterContams_00000026"
                ],
                "children": [
                    "fast2bfq_00000028"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ebc52aa1-2897-4985-9e47-f4c47df054e9.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "49a5f981-ae47-4d92-b675-65b33f311c86maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "b0e40893-7b74-47f6-9216-cb1bfb38b4ffmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "97183bb7-8e72-4701-ba69-6255fa906dc7.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000028",
                "type": "compute",
                "runtime": 1.678,
                "parents": [
                    "sol2sanger_00000027"
                ],
                "children": [
                    "map_00000029"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "97183bb7-8e72-4701-ba69-6255fa906dc7.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "98c6ff87-6567-4abb-9c96-375867875fcdmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "8db077fc-e0cf-4205-8a05-e8e5416ead6cmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "18dbe0f5-156c-4bfd-812c-2449c90a1168.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000029",
                "type": "compute",
                "runtime": 42.05,
                "parents": [
                    "fast2bfq_00000028"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "18dbe0f5-156c-4bfd-812c-2449c90a1168.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "1048df27-e748-4931-8f11-e3b06cab7453maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "51ac09f9-97f9-41ae-a85b-e74f4f095783maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "9c296d96-257a-491a-ba22-f700062c10ea.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "e91333d0-c218-4f90-b820-19aa9eb5e318.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000030",
                "type": "compute",
                "runtime": 7.869,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "680be11e-f6d0-446a-b328-0032518f36a0.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "7f156fcb-d356-4e1e-9b92-b1747359003c.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000031",
                "type": "compute",
                "runtime": 0.033,
                "parents": [
                    "filterContams_00000030"
                ],
                "children": [
                    "fast2bfq_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "7f156fcb-d356-4e1e-9b92-b1747359003c.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "98710da9-5f8d-4f0d-8c66-8fb0200093b8maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "12c19c30-05f2-4138-9727-594331c67fcemaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "59a6c3d1-73f3-4944-9ab1-618f9040097c.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000032",
                "type": "compute",
                "runtime": 1.288,
                "parents": [
                    "sol2sanger_00000031"
                ],
                "children": [
                    "map_00000033"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "59a6c3d1-73f3-4944-9ab1-618f9040097c.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "c315bdea-a67a-462f-b68f-0956b51fde3dmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "5cd9d781-f894-490f-993f-404ba92e3c4dmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "db17511a-629a-4179-baa0-9a9931b5265f.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000033",
                "type": "compute",
                "runtime": 71.84,
                "parents": [
                    "fast2bfq_00000032"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "db17511a-629a-4179-baa0-9a9931b5265f.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "b3e0d665-a519-4c91-830d-e70b4a79382amaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "ddff1f84-986a-4fc1-bfb0-688d524c0dbdmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "7e9e9e0d-00ea-4738-b73a-b52033396057.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "142bd3fd-696a-42ab-9a1b-766ff1cda157.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000034",
                "type": "compute",
                "runtime": 47.417,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "05535110-0d35-4548-8065-359cc94cf11b.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "44557a58-c2e8-463e-a479-adec339b8cf7.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000035",
                "type": "compute",
                "runtime": 0.08,
                "parents": [
                    "filterContams_00000034"
                ],
                "children": [
                    "fast2bfq_00000036"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "44557a58-c2e8-463e-a479-adec339b8cf7.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "907cd38d-8f46-4340-b86c-e5211e802620maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "07412236-4001-459c-b096-6d45750ae0aemaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "cd191daa-b5cd-4eef-a85b-03f6726c62a2.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000036",
                "type": "compute",
                "runtime": 0.241,
                "parents": [
                    "sol2sanger_00000035"
                ],
                "children": [
                    "map_00000037"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "cd191daa-b5cd-4eef-a85b-03f6726c62a2.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "776f8807-447c-45b9-b5c3-8b555e24bddbmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "79bee06a-710f-4bbc-a370-5bb0f1c2fe04maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "8b934b75-b538-45bd-9c8e-263820b8a662.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000037",
                "type": "compute",
                "runtime": 24.836,
                "parents": [
                    "fast2bfq_00000036"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "8b934b75-b538-45bd-9c8e-263820b8a662.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "acbe2287-1725-46bc-8649-c6d87ef93a30maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "84461839-bb59-45c1-8a2f-4da7366e5d72maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "93ece6f5-91d9-4a34-bfce-bd15926e8e89.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "5b0cf0e7-22a2-470c-b3ae-89221a4712b8.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000038",
                "type": "compute",
                "runtime": 2.203,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000039"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1c7d35b6-fefb-4ea0-aec7-550aef524e95.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "944922e8-dd37-490c-a748-2755af1ff3ea.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000039",
                "type": "compute",
                "runtime": 4.535,
                "parents": [
                    "filterContams_00000038"
                ],
                "children": [
                    "fast2bfq_00000040"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "944922e8-dd37-490c-a748-2755af1ff3ea.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "234db02a-38e8-4350-9337-cdb0de8a7b20maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "36c0024f-6808-4021-9b9b-7cbe970099a5maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "16fa9b79-aeef-4a63-ad3e-a8756a59b0b6.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000040",
                "type": "compute",
                "runtime": 0.86,
                "parents": [
                    "sol2sanger_00000039"
                ],
                "children": [
                    "map_00000041"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "16fa9b79-aeef-4a63-ad3e-a8756a59b0b6.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "846cfc3a-7a5a-44b6-a918-585f6131d289maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "64bb5c50-3af0-4685-9b46-b38a97ae8e60maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "db76c852-f39b-462b-a425-454fef750c78.bfq",
                        "size": 2779927
                    }
                ]
            },
            {
                "name": "map_00000041",
                "type": "compute",
                "runtime": 74.432,
                "parents": [
                    "fast2bfq_00000040"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "db76c852-f39b-462b-a425-454fef750c78.bfq",
                        "size": 2779927
                    },
                    {
                        "link": "input",
                        "name": "d5bd7cf7-3c13-4ad4-968f-fa9066f3009bmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "cdc54bf3-f76c-4b6f-9f10-fdea7f945fddmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "99860bdc-2e0d-497f-a35f-7232874ee610.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "01a708e1-ce3e-451d-a642-df08456c0c53.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "filterContams_00000042",
                "type": "compute",
                "runtime": 23.148,
                "parents": [
                    "fastqSplit_00000001"
                ],
                "children": [
                    "sol2sanger_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f93c2974-76fc-4e73-9eab-0c8461aa50ba.sfq",
                        "size": 385300
                    },
                    {
                        "link": "output",
                        "name": "1469fdf7-6741-48f3-9890-afc1ae08f91d.sfq",
                        "size": 379368
                    }
                ]
            },
            {
                "name": "sol2sanger_00000043",
                "type": "compute",
                "runtime": 3.098,
                "parents": [
                    "filterContams_00000042"
                ],
                "children": [
                    "fast2bfq_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1469fdf7-6741-48f3-9890-afc1ae08f91d.sfq",
                        "size": 379368
                    },
                    {
                        "link": "input",
                        "name": "b885e6eb-f015-45b2-b194-5824180c4241maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "6e0e57ff-8211-474a-a973-f3a942eb6843maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "fdd6f465-bc5e-47a8-9eff-770e8de4babc.fq",
                        "size": 290449
                    }
                ]
            },
            {
                "name": "fast2bfq_00000044",
                "type": "compute",
                "runtime": 1.224,
                "parents": [
                    "sol2sanger_00000043"
                ],
                "children": [
                    "map_00000045"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fdd6f465-bc5e-47a8-9eff-770e8de4babc.fq",
                        "size": 290449
                    },
                    {
                        "link": "input",
                        "name": "3b5196a3-caab-4e2f-ae0f-08d84d2504bfmaq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "2b165f47-5008-4fd9-84a2-19f4061cf837maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "fa566a24-17ac-49dc-a28c-289ece08e0ce.bfq",
                        "size": 71135
                    }
                ]
            },
            {
                "name": "map_00000045",
                "type": "compute",
                "runtime": 24.836,
                "parents": [
                    "fast2bfq_00000044"
                ],
                "children": [
                    "mapMerge_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fa566a24-17ac-49dc-a28c-289ece08e0ce.bfq",
                        "size": 71135
                    },
                    {
                        "link": "input",
                        "name": "ddfbb6dc-7111-4e65-88e6-8fb09a377b89maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "a2ede22e-55b5-4c94-a323-6f5c4faa8d37maqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "3d2701fe-5b71-41f0-aac2-82a8fc42b495.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "8b94422d-6192-4cf4-9e4e-eb2187278aa2.map",
                        "size": 17429
                    }
                ]
            },
            {
                "name": "mapMerge_00000046",
                "type": "compute",
                "runtime": 1.86,
                "parents": [
                    "map_00000005",
                    "map_00000009",
                    "map_00000013",
                    "map_00000017",
                    "map_00000021",
                    "map_00000025",
                    "map_00000029",
                    "map_00000033",
                    "map_00000037",
                    "map_00000041",
                    "map_00000045"
                ],
                "children": [
                    "mapMerge_00000047"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4b4220dc-ff03-4297-8634-ee4325056bb9.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "19100d9a-f434-48ed-976c-4bc580a90585.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "11bf188b-30bd-47c9-8d63-356eeb07be54.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "813fe295-8a4b-4e09-b58e-836871edecdf.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "f442562c-9ae7-4df0-ad45-d7072988894c.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "2ddfdaf4-bfe2-4cb7-acf2-4bea5ce17d37.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "e91333d0-c218-4f90-b820-19aa9eb5e318.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "142bd3fd-696a-42ab-9a1b-766ff1cda157.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "5b0cf0e7-22a2-470c-b3ae-89221a4712b8.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "01a708e1-ce3e-451d-a642-df08456c0c53.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "8b94422d-6192-4cf4-9e4e-eb2187278aa2.map",
                        "size": 17429
                    },
                    {
                        "link": "input",
                        "name": "f0b3eb75-37fb-4f64-9632-2016a61d7ff6maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "2732347d-4a83-4f31-80d7-7553b7f0fe4amaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "a1434cb4-1164-4cfc-b489-61692473f06b.map",
                        "size": 8972748
                    }
                ]
            },
            {
                "name": "mapMerge_00000047",
                "type": "compute",
                "runtime": 2.772,
                "parents": [
                    "mapMerge_00000046"
                ],
                "children": [
                    "chr21_00000048"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a1434cb4-1164-4cfc-b489-61692473f06b.map",
                        "size": 8972748
                    },
                    {
                        "link": "input",
                        "name": "238c73ed-819f-4ccc-89ae-b3c31edd1485maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "80c229df-1f7f-40fb-a49d-4e1b75c31358maqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "04cf4cad-18a4-4c7c-aa7f-bcc7a084cc0b.map",
                        "size": 8972748
                    }
                ]
            },
            {
                "name": "chr21_00000048",
                "type": "compute",
                "runtime": 20.064,
                "parents": [
                    "mapMerge_00000047"
                ],
                "children": [
                    "pileup_00000049"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "04cf4cad-18a4-4c7c-aa7f-bcc7a084cc0b.map",
                        "size": 8972748
                    },
                    {
                        "link": "input",
                        "name": "f9e51845-57d7-4411-9cfc-16622c3addc2maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "a9bd587e-3af1-4439-83fc-0da3c8dc5b4dmaqindex",
                        "size": 118456
                    },
                    {
                        "link": "output",
                        "name": "ca365370-9884-4279-b140-c045a3893aa0.map",
                        "size": 8974436
                    }
                ]
            },
            {
                "name": "pileup_00000049",
                "type": "compute",
                "runtime": 23.112,
                "parents": [
                    "chr21_00000048"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "ca365370-9884-4279-b140-c045a3893aa0.map",
                        "size": 8974436
                    },
                    {
                        "link": "input",
                        "name": "8bee6082-3ed7-4eed-8712-114322623825maq",
                        "size": 171256
                    },
                    {
                        "link": "input",
                        "name": "4e07823d-2cff-4dad-a289-fbea3139946emaqindex",
                        "size": 118456
                    },
                    {
                        "link": "input",
                        "name": "e53a8ee9-911f-4a74-a182-3b2ec91a05b5.bfa",
                        "size": 46944392
                    },
                    {
                        "link": "output",
                        "name": "e632f430-bb1c-4692-b7db-905e6dd93b57.pileup",
                        "size": 4595783
                    }
                ]
            }
        ]
    }
}