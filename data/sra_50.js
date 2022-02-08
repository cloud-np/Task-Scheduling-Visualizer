export default {
    "name": "Srasearch-synthetic-instance",
    "description": "Instance generated with WfCommons - https://wfcommons.org",
    "createdAt": "2022-02-01T14:47:04.201741",
    "schemaVersion": "1.2",
    "author": {
        "name": "cloud",
        "email": "support@wfcommons.org"
    },
    "wms": {
        "name": "WfCommons",
        "version": "0.7",
        "url": "https://docs.wfcommons.org/en/v0.7/"
    },
    "workflow": {
        "executedAt": "20220201T164704+0200",
        "makespan": 0,
        "jobs": [
            {
                "name": "bowtie2-build_00000001",
                "type": "compute",
                "runtime": 13.977,
                "command": {
                    "program": "bowtie2-build"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000003",
                    "bowtie2_00000005",
                    "bowtie2_00000007",
                    "bowtie2_00000009",
                    "bowtie2_00000011",
                    "bowtie2_00000013",
                    "bowtie2_00000015",
                    "bowtie2_00000017",
                    "bowtie2_00000019",
                    "bowtie2_00000021",
                    "bowtie2_00000024",
                    "bowtie2_00000026",
                    "bowtie2_00000027",
                    "bowtie2_00000030",
                    "bowtie2_00000032",
                    "bowtie2_00000034",
                    "bowtie2_00000036",
                    "bowtie2_00000038",
                    "bowtie2_00000039",
                    "bowtie2_00000042",
                    "bowtie2_00000043",
                    "bowtie2_00000045",
                    "bowtie2_00000047"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "3b840a97-8c9b-4903-a0ea-7091fdaaeee3.fna",
                        "size": 98721
                    }
                ],
                "cores": 1,
                "id": "00000001",
                "category": "bowtie2-build"
            },
            {
                "name": "fasterq-dump_00000002",
                "type": "compute",
                "runtime": 2073.343,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000003"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "87fa2116-8fb7-40f5-ba7b-484f360b5545.fastq",
                        "size": 786300251
                    }
                ],
                "cores": 1,
                "id": "00000002",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000003",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000002"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "72c3b09e-b8f3-4717-92de-410f6b7440be.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "6df2a599-2af0-4d8f-b179-c63c537f2d75.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "87fa2116-8fb7-40f5-ba7b-484f360b5545.fastq",
                        "size": 786300251
                    }
                ],
                "cores": 1,
                "id": "00000003",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000004",
                "type": "compute",
                "runtime": 4996.246,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000005"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "81828d80-ce70-4c47-bbc3-30f64f7baa19.fastq",
                        "size": 1303892789
                    }
                ],
                "cores": 1,
                "id": "00000004",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000005",
                "type": "compute",
                "runtime": 106.865,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000004"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "11ac4b9b-717a-4b87-ae25-943ccaf639f5.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "35f7a4be-5fbc-4bb5-87bb-b942d763041d.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "81828d80-ce70-4c47-bbc3-30f64f7baa19.fastq",
                        "size": 1303892789
                    }
                ],
                "cores": 1,
                "id": "00000005",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000006",
                "type": "compute",
                "runtime": 6315.878,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000007"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "3cb91752-8f38-4ced-b8c9-fd033bfa27a8.fastq",
                        "size": 1070900263
                    }
                ],
                "cores": 1,
                "id": "00000006",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000007",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000006"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "da3f5153-f44a-4d08-9630-bc5bc6c98670.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "360ae7d4-2420-446c-956d-775cef82c778.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "3cb91752-8f38-4ced-b8c9-fd033bfa27a8.fastq",
                        "size": 1070900263
                    }
                ],
                "cores": 1,
                "id": "00000007",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000008",
                "type": "compute",
                "runtime": 631.18,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000009"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "1d2ae5a1-3894-4f05-950e-ed51c8bde334.fastq",
                        "size": 198108189
                    }
                ],
                "cores": 1,
                "id": "00000008",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000009",
                "type": "compute",
                "runtime": 120.471,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000008"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "1f532576-8625-40b4-873f-ac703c55bc19.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "85c4e554-9cdf-460d-9149-ecb6903a3259.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "1d2ae5a1-3894-4f05-950e-ed51c8bde334.fastq",
                        "size": 198108189
                    }
                ],
                "cores": 1,
                "id": "00000009",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000010",
                "type": "compute",
                "runtime": 743.258,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000011"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "88514ab5-7203-4332-8674-a0045d904ae2.fastq",
                        "size": 1364107753
                    }
                ],
                "cores": 1,
                "id": "00000010",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000011",
                "type": "compute",
                "runtime": 120.559,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000010"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "52746487-7325-41a7-87e4-cb08e5c3c6fc.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "12a203b1-d8cf-4dab-a0a6-27e014746767.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "88514ab5-7203-4332-8674-a0045d904ae2.fastq",
                        "size": 1364107753
                    }
                ],
                "cores": 1,
                "id": "00000011",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000012",
                "type": "compute",
                "runtime": 2179.241,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000013"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "c0aac64f-cd8d-411c-bee7-b7090e014f6c.fastq",
                        "size": 1731721851
                    }
                ],
                "cores": 1,
                "id": "00000012",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000013",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000012"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "68bdbfae-b7c2-4cc2-8e89-a53345ec1108.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "a92450ff-9765-41e2-96ef-afb59a41323e.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "c0aac64f-cd8d-411c-bee7-b7090e014f6c.fastq",
                        "size": 1731721851
                    }
                ],
                "cores": 1,
                "id": "00000013",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000014",
                "type": "compute",
                "runtime": 434.37,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000015"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "7d9f7fa2-f673-4394-9735-cf195cd43c8d.fastq",
                        "size": 864811408
                    }
                ],
                "cores": 1,
                "id": "00000014",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000015",
                "type": "compute",
                "runtime": 120.764,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000014"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "3d3b77c3-341a-403d-8377-a81ef9d105aa.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "f8d5c405-8e94-4da9-8930-e3182fad6bcf.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "7d9f7fa2-f673-4394-9735-cf195cd43c8d.fastq",
                        "size": 864811408
                    }
                ],
                "cores": 1,
                "id": "00000015",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000016",
                "type": "compute",
                "runtime": 9555.515,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000017"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "0a5ca0c2-0012-418c-898a-def22b4ed287.fastq",
                        "size": 953097848
                    }
                ],
                "cores": 1,
                "id": "00000016",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000017",
                "type": "compute",
                "runtime": 53.889,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000016"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "f48637f0-3954-4d46-883b-c18d35647f64.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "8f81ddb4-ef81-4e32-a037-67c81db2c7dc.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "0a5ca0c2-0012-418c-898a-def22b4ed287.fastq",
                        "size": 953097848
                    }
                ],
                "cores": 1,
                "id": "00000017",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000018",
                "type": "compute",
                "runtime": 434.37,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000019"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "16901b69-24e5-480f-9cfc-82166115d4bf.fastq",
                        "size": 1448036030
                    }
                ],
                "cores": 1,
                "id": "00000018",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000019",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000018"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "485c9adb-edb8-4dec-a2ad-4e7e5bab07aa.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "5922a4ee-2614-4375-8d57-305f3605b212.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "16901b69-24e5-480f-9cfc-82166115d4bf.fastq",
                        "size": 1448036030
                    }
                ],
                "cores": 1,
                "id": "00000019",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000020",
                "type": "compute",
                "runtime": 1478.342,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000021"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "06798e2a-d27c-4071-a6a0-f1fdd08da1b1.fastq",
                        "size": 1107797377
                    }
                ],
                "cores": 1,
                "id": "00000020",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000021",
                "type": "compute",
                "runtime": 73.117,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000020"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "a812c7a8-8fcd-4fc3-9047-e4ee0a884b24.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "43cc9e7c-1340-45b7-8d42-ccbb594f907d.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "06798e2a-d27c-4071-a6a0-f1fdd08da1b1.fastq",
                        "size": 1107797377
                    }
                ],
                "cores": 1,
                "id": "00000021",
                "category": "bowtie2"
            },
            {
                "name": "merge_00000022",
                "type": "compute",
                "runtime": 0.304,
                "command": {
                    "program": "merge"
                },
                "parents": [
                    "bowtie2_00000003",
                    "bowtie2_00000005",
                    "bowtie2_00000007",
                    "bowtie2_00000009",
                    "bowtie2_00000011",
                    "bowtie2_00000013",
                    "bowtie2_00000015",
                    "bowtie2_00000017",
                    "bowtie2_00000019",
                    "bowtie2_00000021",
                    "bowtie2_00000024",
                    "bowtie2_00000026",
                    "bowtie2_00000027",
                    "bowtie2_00000030",
                    "bowtie2_00000032",
                    "bowtie2_00000034",
                    "bowtie2_00000036",
                    "bowtie2_00000038",
                    "bowtie2_00000039",
                    "bowtie2_00000042",
                    "bowtie2_00000043",
                    "bowtie2_00000045",
                    "bowtie2_00000047"
                ],
                "children": [],
                "files": [
                    {
                        "link": "output",
                        "name": "bc3b41cd-5080-42b6-8e71-8205314e3f3a.gz",
                        "size": 1439
                    },
                    {
                        "link": "input",
                        "name": "72c3b09e-b8f3-4717-92de-410f6b7440be.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "6df2a599-2af0-4d8f-b179-c63c537f2d75.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "11ac4b9b-717a-4b87-ae25-943ccaf639f5.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "35f7a4be-5fbc-4bb5-87bb-b942d763041d.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "da3f5153-f44a-4d08-9630-bc5bc6c98670.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "360ae7d4-2420-446c-956d-775cef82c778.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "1f532576-8625-40b4-873f-ac703c55bc19.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "85c4e554-9cdf-460d-9149-ecb6903a3259.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "52746487-7325-41a7-87e4-cb08e5c3c6fc.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "12a203b1-d8cf-4dab-a0a6-27e014746767.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "68bdbfae-b7c2-4cc2-8e89-a53345ec1108.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "a92450ff-9765-41e2-96ef-afb59a41323e.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "3d3b77c3-341a-403d-8377-a81ef9d105aa.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "f8d5c405-8e94-4da9-8930-e3182fad6bcf.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "f48637f0-3954-4d46-883b-c18d35647f64.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "8f81ddb4-ef81-4e32-a037-67c81db2c7dc.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "485c9adb-edb8-4dec-a2ad-4e7e5bab07aa.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "5922a4ee-2614-4375-8d57-305f3605b212.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "a812c7a8-8fcd-4fc3-9047-e4ee0a884b24.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "43cc9e7c-1340-45b7-8d42-ccbb594f907d.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "73b09113-e6fe-40e0-9715-aa58646967dc.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "2d668c95-85bd-4d9a-a404-fdc3fcf31925.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "cb6cacb2-e799-403b-a7cd-ef9f44c22311.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "e0086b80-f8a2-481d-a691-2eabf586a547.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "b57a4444-babb-481d-8804-ee64c09a1dad.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "b38895aa-f5f2-4105-9c29-dd083ca691c4.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9c40a620-1b3c-4d3b-9d96-14a2ca4ce035.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "9f665952-378d-4861-abe5-5e72d0d34575.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "ff0fc494-fa41-49b3-961a-95300e30292b.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "8428f873-678d-43ea-b42a-e04efeb2c023.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "f7c0fc47-bbbc-403a-85b5-26d04d0c14f9.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "8c606fbe-1f5f-43e5-ae85-0b1f4c84ccf0.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "2aaca65b-ba61-464a-b0dc-3ca3baecf59b.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "b302f947-8495-466e-b080-84ab0b9b56a4.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "92977c4c-bbc7-453f-a5bc-f2226e819678.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "b87e2cc0-9527-4040-a695-d679495fa3a1.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "973c2cc8-feea-42ab-8456-71d09b212f13.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "2ff82a87-d952-47af-a213-8f0ef4ba3c5c.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "b654aee0-c104-42e9-a6e8-7b94e998d083.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "ae233014-36ee-4ac9-8a1a-5a4dd5a9095f.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "ca6a2c52-c082-41f3-a207-48b874239d06.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "a9537330-1a01-4f0d-a707-772d15aa296c.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "38b83585-9d5c-45b7-aa48-08a1e2f3c42d.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "03a193af-a084-446a-9889-70900e460c16.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "f914800c-0f68-4f62-ad8b-175cfbd20fc4.bai",
                        "size": 24
                    },
                    {
                        "link": "input",
                        "name": "1085d1e1-2bda-4b32-b211-a3501e430b13.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "e8793b07-4136-472e-89d4-6742e5692b56.gz",
                        "size": 6448
                    }
                ],
                "cores": 1,
                "id": "00000022",
                "category": "merge"
            },
            {
                "name": "fasterq-dump_00000023",
                "type": "compute",
                "runtime": 2127.422,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000024"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "dfac5fc0-b0e8-43de-9398-41c87a2507a4.fastq",
                        "size": 1948805161
                    }
                ],
                "cores": 1,
                "id": "00000023",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000024",
                "type": "compute",
                "runtime": 45.03,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000023"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "73b09113-e6fe-40e0-9715-aa58646967dc.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "2d668c95-85bd-4d9a-a404-fdc3fcf31925.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "dfac5fc0-b0e8-43de-9398-41c87a2507a4.fastq",
                        "size": 1948805161
                    }
                ],
                "cores": 1,
                "id": "00000024",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000025",
                "type": "compute",
                "runtime": 2319.461,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000026"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "c67e2428-40a6-4201-bbbb-667fc56040dd.fastq",
                        "size": 1322355756
                    }
                ],
                "cores": 1,
                "id": "00000025",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000026",
                "type": "compute",
                "runtime": 120.476,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000025"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "cb6cacb2-e799-403b-a7cd-ef9f44c22311.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "e0086b80-f8a2-481d-a691-2eabf586a547.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "c67e2428-40a6-4201-bbbb-667fc56040dd.fastq",
                        "size": 1322355756
                    }
                ],
                "cores": 1,
                "id": "00000026",
                "category": "bowtie2"
            },
            {
                "name": "bowtie2_00000027",
                "type": "compute",
                "runtime": 112.495,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000028"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "b57a4444-babb-481d-8804-ee64c09a1dad.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "b38895aa-f5f2-4105-9c29-dd083ca691c4.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "113d2cf0-9433-49c9-917a-788cb1f1bd42.fastq",
                        "size": 1092637876
                    }
                ],
                "cores": 1,
                "id": "00000027",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000028",
                "type": "compute",
                "runtime": 434.37,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000027"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "113d2cf0-9433-49c9-917a-788cb1f1bd42.fastq",
                        "size": 1092637876
                    }
                ],
                "cores": 1,
                "id": "00000028",
                "category": "fasterq-dump"
            },
            {
                "name": "fasterq-dump_00000029",
                "type": "compute",
                "runtime": 3159.205,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000030"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "48cff8ba-d524-4f7f-b9fb-997929d7f8d9.fastq",
                        "size": 1236884823
                    }
                ],
                "cores": 1,
                "id": "00000029",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000030",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000029"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "9c40a620-1b3c-4d3b-9d96-14a2ca4ce035.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "9f665952-378d-4861-abe5-5e72d0d34575.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "48cff8ba-d524-4f7f-b9fb-997929d7f8d9.fastq",
                        "size": 1236884823
                    }
                ],
                "cores": 1,
                "id": "00000030",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000031",
                "type": "compute",
                "runtime": 1599.302,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000032"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "81919591-fe29-42ff-aadf-26200e5a0a0f.fastq",
                        "size": 1568709132
                    }
                ],
                "cores": 1,
                "id": "00000031",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000032",
                "type": "compute",
                "runtime": 121.006,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000031"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "ff0fc494-fa41-49b3-961a-95300e30292b.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "8428f873-678d-43ea-b42a-e04efeb2c023.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "81919591-fe29-42ff-aadf-26200e5a0a0f.fastq",
                        "size": 1568709132
                    }
                ],
                "cores": 1,
                "id": "00000032",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000033",
                "type": "compute",
                "runtime": 965.547,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000034"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "66827284-5f3d-4534-9cab-ef88ea11b133.fastq",
                        "size": 900833738
                    }
                ],
                "cores": 1,
                "id": "00000033",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000034",
                "type": "compute",
                "runtime": 23.032,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000033"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "f7c0fc47-bbbc-403a-85b5-26d04d0c14f9.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "8c606fbe-1f5f-43e5-ae85-0b1f4c84ccf0.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "66827284-5f3d-4534-9cab-ef88ea11b133.fastq",
                        "size": 900833738
                    }
                ],
                "cores": 1,
                "id": "00000034",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000035",
                "type": "compute",
                "runtime": 5977.565,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000036"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "fbafaf8e-1d89-49e3-b054-cee17e7612a0.fastq",
                        "size": 1100872135
                    }
                ],
                "cores": 1,
                "id": "00000035",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000036",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000035"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "2aaca65b-ba61-464a-b0dc-3ca3baecf59b.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "b302f947-8495-466e-b080-84ab0b9b56a4.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "fbafaf8e-1d89-49e3-b054-cee17e7612a0.fastq",
                        "size": 1100872135
                    }
                ],
                "cores": 1,
                "id": "00000036",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000037",
                "type": "compute",
                "runtime": 2231.234,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000038"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "08ce5594-a7b4-4ba1-8ed4-8776bf973f97.fastq",
                        "size": 556834683
                    }
                ],
                "cores": 1,
                "id": "00000037",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000038",
                "type": "compute",
                "runtime": 12.102,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000037"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "92977c4c-bbc7-453f-a5bc-f2226e819678.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "b87e2cc0-9527-4040-a695-d679495fa3a1.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "08ce5594-a7b4-4ba1-8ed4-8776bf973f97.fastq",
                        "size": 556834683
                    }
                ],
                "cores": 1,
                "id": "00000038",
                "category": "bowtie2"
            },
            {
                "name": "bowtie2_00000039",
                "type": "compute",
                "runtime": 110.485,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000040"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "973c2cc8-feea-42ab-8456-71d09b212f13.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "2ff82a87-d952-47af-a213-8f0ef4ba3c5c.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "f9b57053-783f-401c-b6ea-941b8f52a412.fastq",
                        "size": 1242260648
                    }
                ],
                "cores": 1,
                "id": "00000039",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000040",
                "type": "compute",
                "runtime": 2133.69,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000039"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "f9b57053-783f-401c-b6ea-941b8f52a412.fastq",
                        "size": 1242260648
                    }
                ],
                "cores": 1,
                "id": "00000040",
                "category": "fasterq-dump"
            },
            {
                "name": "fasterq-dump_00000041",
                "type": "compute",
                "runtime": 749.587,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000042"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "83e1cd95-74ca-4863-a566-f70ce549cd2a.fastq",
                        "size": 198108189
                    }
                ],
                "cores": 1,
                "id": "00000041",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000042",
                "type": "compute",
                "runtime": 92.618,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000041"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "b654aee0-c104-42e9-a6e8-7b94e998d083.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "ae233014-36ee-4ac9-8a1a-5a4dd5a9095f.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "83e1cd95-74ca-4863-a566-f70ce549cd2a.fastq",
                        "size": 198108189
                    }
                ],
                "cores": 1,
                "id": "00000042",
                "category": "bowtie2"
            },
            {
                "name": "bowtie2_00000043",
                "type": "compute",
                "runtime": 24.268,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000044"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "ca6a2c52-c082-41f3-a207-48b874239d06.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "a9537330-1a01-4f0d-a707-772d15aa296c.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "7ec9383f-b0b2-4c3c-bcb0-86280f472a21.fastq",
                        "size": 381909437
                    }
                ],
                "cores": 1,
                "id": "00000043",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000044",
                "type": "compute",
                "runtime": 2264.443,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "7ec9383f-b0b2-4c3c-bcb0-86280f472a21.fastq",
                        "size": 381909437
                    }
                ],
                "cores": 1,
                "id": "00000044",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000045",
                "type": "compute",
                "runtime": 19.535,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000046"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "38b83585-9d5c-45b7-aa48-08a1e2f3c42d.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "03a193af-a084-446a-9889-70900e460c16.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "d7f221b4-0069-42bb-a9fd-cc1a595ba88d.fastq",
                        "size": 880076731
                    }
                ],
                "cores": 1,
                "id": "00000045",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000046",
                "type": "compute",
                "runtime": 2015.761,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000045"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "d7f221b4-0069-42bb-a9fd-cc1a595ba88d.fastq",
                        "size": 880076731
                    }
                ],
                "cores": 1,
                "id": "00000046",
                "category": "fasterq-dump"
            },
            {
                "name": "bowtie2_00000047",
                "type": "compute",
                "runtime": 85.789,
                "command": {
                    "program": "bowtie2"
                },
                "parents": [
                    "bowtie2-build_00000001",
                    "fasterq-dump_00000048"
                ],
                "children": [
                    "merge_00000022"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "f914800c-0f68-4f62-ad8b-175cfbd20fc4.bai",
                        "size": 24
                    },
                    {
                        "link": "output",
                        "name": "1085d1e1-2bda-4b32-b211-a3501e430b13.bam",
                        "size": 317
                    },
                    {
                        "link": "input",
                        "name": "9e21d449-3035-4485-824d-a036366294d7.bt2",
                        "size": 610990
                    },
                    {
                        "link": "input",
                        "name": "d50a2af2-d0c1-4575-9ca3-c7f235900fee.fastq",
                        "size": 613177891
                    }
                ],
                "cores": 1,
                "id": "00000047",
                "category": "bowtie2"
            },
            {
                "name": "fasterq-dump_00000048",
                "type": "compute",
                "runtime": 1758.729,
                "command": {
                    "program": "fasterq-dump"
                },
                "parents": [],
                "children": [
                    "bowtie2_00000047"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "d50a2af2-d0c1-4575-9ca3-c7f235900fee.fastq",
                        "size": 613177891
                    }
                ],
                "cores": 1,
                "id": "00000048",
                "category": "fasterq-dump"
            }
        ],
        "machines": []
    }
}