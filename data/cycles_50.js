export default {
    "name": "Cycles-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2021-02-16T11:55:37.851606",
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
                "name": "baseline_cycles_00000001",
                "type": "compute",
                "runtime": 61.6,
                "parents": [],
                "children": [
                    "cycles_00000002",
                    "fertilizer_increase_cycles_00000003"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "117808cb-11b7-45db-af66-626d4f9fbc6d.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "2c957a16-03bd-4442-9373-85c6c44119a5.weather",
                        "size": 96897
                    },
                    {
                        "link": "input",
                        "name": "54dd3a96-f1cb-426a-9574-116495f2208b.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "1c05cfa2-ba60-4371-af6e-e854885a5f3b.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "31c1ad13-ff6d-4d23-8ebf-c1f0725c80d6cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "4b4cfac7-995a-403e-b7fa-2dda214eab9b.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "c21f030b-f537-496c-bf88-89e4cce03b90.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "7b7f5eff-fd44-419a-b5d2-ddbae43757fa.csv",
                        "size": 275
                    },
                    {
                        "link": "output",
                        "name": "30d11749-315d-49b9-98fb-ce80e4626420.zip",
                        "size": 445841
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000002",
                "type": "compute",
                "runtime": 82.804,
                "parents": [
                    "baseline_cycles_00000001"
                ],
                "children": [
                    "cycles_output_summary_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c21f030b-f537-496c-bf88-89e4cce03b90.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "7b7f5eff-fd44-419a-b5d2-ddbae43757fa.csv",
                        "size": 275
                    },
                    {
                        "link": "input",
                        "name": "30d11749-315d-49b9-98fb-ce80e4626420.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "7cd5df5c-59c2-45ab-8228-68c665c1610e.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "4d5dcc5b-fc47-40e5-bf4a-a8d5a4e56f6d.weather",
                        "size": 236732
                    },
                    {
                        "link": "input",
                        "name": "617f35a2-72ad-4dd0-9876-3c00ed50e2e8.operation",
                        "size": 1806
                    },
                    {
                        "link": "input",
                        "name": "a51fcac0-243c-4f92-bba5-f3f39a80cb43.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "b8f0a2aa-fdf7-4886-81e3-a02c7bfe3934cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "27788c67-6501-4d73-bf10-2bf24fabd171.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "b4372279-3e75-4bf9-8614-a0759dd919ee.zip",
                        "size": 2355101
                    },
                    {
                        "link": "output",
                        "name": "2a296ac7-7f39-4a23-8ef1-3f84ac2fed80.dat",
                        "size": 1808675
                    },
                    {
                        "link": "output",
                        "name": "f87365f1-e875-4fb0-a3b1-4fd897386612.csv",
                        "size": 48
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000003",
                "type": "compute",
                "runtime": 69.274,
                "parents": [
                    "baseline_cycles_00000001"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000004"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c21f030b-f537-496c-bf88-89e4cce03b90.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "7b7f5eff-fd44-419a-b5d2-ddbae43757fa.csv",
                        "size": 275
                    },
                    {
                        "link": "input",
                        "name": "30d11749-315d-49b9-98fb-ce80e4626420.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "72f3369a-6990-4333-b073-538a6ef10f5f.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "ca92f869-85b5-4aaa-8c7c-d3eb4fca4300.weather",
                        "size": 415099
                    },
                    {
                        "link": "input",
                        "name": "847a567b-1d63-4571-a52b-75447e697e89.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "362f794c-81f2-495f-bc81-f170bb454092.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "7c0a0761-9436-48f4-88db-4577132da2bacycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "3778b592-8c40-4930-9664-8c32ba30acb9.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "489ee912-185b-4632-aacd-813b08798f87.csv",
                        "size": 121
                    },
                    {
                        "link": "output",
                        "name": "45e0ae5c-db5d-4ed3-97ca-d8f84a2d0d9b.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "706b36a3-9b19-4957-84f0-51024469b97e.zip",
                        "size": 448675
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000004",
                "type": "compute",
                "runtime": 0.825,
                "parents": [
                    "fertilizer_increase_cycles_00000003"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000022"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "489ee912-185b-4632-aacd-813b08798f87.csv",
                        "size": 121
                    },
                    {
                        "link": "input",
                        "name": "45e0ae5c-db5d-4ed3-97ca-d8f84a2d0d9b.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "706b36a3-9b19-4957-84f0-51024469b97e.zip",
                        "size": 448675
                    },
                    {
                        "link": "output",
                        "name": "a78a71fa-a65f-4864-9b73-665b797e3f12.csv",
                        "size": 7895
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000005",
                "type": "compute",
                "runtime": 11.06,
                "parents": [],
                "children": [
                    "cycles_00000006",
                    "fertilizer_increase_cycles_00000007"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f54f3f23-2060-498d-83ce-d035969fb8a3.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "dc7515e4-bc24-42b9-979e-c8f746d268fd.weather",
                        "size": 525498
                    },
                    {
                        "link": "input",
                        "name": "e8d12ca4-9d70-469b-83fd-628fa0c9a188.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "001d9fea-1ce6-4c72-960f-91f880439901.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "407c0282-8057-4d9a-a373-c2c5c6b233b7cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "79423a46-9685-472a-b068-7053fe005df8.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "59703167-0c4a-4269-9707-c0c07c1aa703.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "4cac9d6b-4d6d-40a3-bfb1-640aa2540a68.csv",
                        "size": 259
                    },
                    {
                        "link": "output",
                        "name": "0a5981cd-1345-40d2-ae5d-cde6147e506b.zip",
                        "size": 3171635
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000006",
                "type": "compute",
                "runtime": 10.16,
                "parents": [
                    "baseline_cycles_00000005"
                ],
                "children": [
                    "cycles_output_summary_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "59703167-0c4a-4269-9707-c0c07c1aa703.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "4cac9d6b-4d6d-40a3-bfb1-640aa2540a68.csv",
                        "size": 259
                    },
                    {
                        "link": "input",
                        "name": "0a5981cd-1345-40d2-ae5d-cde6147e506b.zip",
                        "size": 3171635
                    },
                    {
                        "link": "input",
                        "name": "cbe19dd4-e6c5-440d-95b5-0f279eeec4d4.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "c0724320-07d1-4ace-b7c7-19142aa7a276.weather",
                        "size": 49130
                    },
                    {
                        "link": "input",
                        "name": "b1f0edaa-c5bc-4a74-a7be-a570a7a71112.operation",
                        "size": 1806
                    },
                    {
                        "link": "input",
                        "name": "716daa1a-d3c0-4984-8730-7c0b4869c99f.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "85c01deb-3e68-42db-9cfa-b2ff7de41dd6cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "211cf0d1-b713-4e40-803a-b5c0024b4e29.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "724b33f6-c414-4190-be84-0c099bf843a0.zip",
                        "size": 4135532
                    },
                    {
                        "link": "output",
                        "name": "1267dfe6-ac74-468f-92d3-19bb41a2b9ee.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "8c3e554e-edcd-474a-8f6f-60c1e9bb74f8.csv",
                        "size": 109
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000007",
                "type": "compute",
                "runtime": 10.123,
                "parents": [
                    "baseline_cycles_00000005"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000008"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "59703167-0c4a-4269-9707-c0c07c1aa703.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "4cac9d6b-4d6d-40a3-bfb1-640aa2540a68.csv",
                        "size": 259
                    },
                    {
                        "link": "input",
                        "name": "0a5981cd-1345-40d2-ae5d-cde6147e506b.zip",
                        "size": 3171635
                    },
                    {
                        "link": "input",
                        "name": "f72f3d74-00ab-4e8b-b253-cc713b0487d1.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "fed78ec5-a8f7-44a7-8d95-cdd487997e4e.weather",
                        "size": 460443
                    },
                    {
                        "link": "input",
                        "name": "5b226fbd-7fa7-44ef-bb6b-3e22c6faac83.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "6f3d2025-ba9f-4f6b-8170-72a54c10f114.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "f012ece5-9b22-401a-b770-39417243558dcycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "84cc4577-f9ac-482d-8a50-6c29a3ac35e6.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "bd9b5c6f-8958-4323-87f9-257063e0ad22.csv",
                        "size": 163
                    },
                    {
                        "link": "output",
                        "name": "fdfec5fe-43c4-46eb-b63e-38ae5d40f2d7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "fe881790-93b4-443d-9750-052e6376884e.zip",
                        "size": 2867555
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000008",
                "type": "compute",
                "runtime": 1.12,
                "parents": [
                    "fertilizer_increase_cycles_00000007"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000022"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bd9b5c6f-8958-4323-87f9-257063e0ad22.csv",
                        "size": 163
                    },
                    {
                        "link": "input",
                        "name": "fdfec5fe-43c4-46eb-b63e-38ae5d40f2d7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "fe881790-93b4-443d-9750-052e6376884e.zip",
                        "size": 2867555
                    },
                    {
                        "link": "output",
                        "name": "ee1aa48a-a8da-4c00-9e6f-3ae90b99a7a4.csv",
                        "size": 7732
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000009",
                "type": "compute",
                "runtime": 75.363,
                "parents": [],
                "children": [
                    "cycles_00000010",
                    "fertilizer_increase_cycles_00000011"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "236cc738-3b20-41c7-85a2-f3571e8bec34.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "bbd56737-8a5d-401c-8776-e0881a993d83.weather",
                        "size": 375804
                    },
                    {
                        "link": "input",
                        "name": "d6eb5b79-0c0b-4d97-a465-6b59c3d41ac1.operation",
                        "size": 1806
                    },
                    {
                        "link": "input",
                        "name": "0c64b04c-8799-4561-8860-bfccfa951a9b.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "278e111b-647b-409c-b0e6-7470ff617cdccycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "06673aed-627c-43f5-b154-56f9f90555f4.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "bb123d34-3e1d-4830-a2c7-335da6157aff.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "7bd1bfad-7377-4887-ace8-cc27931fdf2c.csv",
                        "size": 104
                    },
                    {
                        "link": "output",
                        "name": "e2052007-63b9-41a3-898d-c3d0da31152d.zip",
                        "size": 3593665
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000010",
                "type": "compute",
                "runtime": 90.484,
                "parents": [
                    "baseline_cycles_00000009"
                ],
                "children": [
                    "cycles_output_summary_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bb123d34-3e1d-4830-a2c7-335da6157aff.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "7bd1bfad-7377-4887-ace8-cc27931fdf2c.csv",
                        "size": 104
                    },
                    {
                        "link": "input",
                        "name": "e2052007-63b9-41a3-898d-c3d0da31152d.zip",
                        "size": 3593665
                    },
                    {
                        "link": "input",
                        "name": "9957a721-3097-4be8-a350-b9c322cdebf4.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "a7e96255-b599-4bc4-91c0-c98ba58e4c47.weather",
                        "size": 123635
                    },
                    {
                        "link": "input",
                        "name": "e561243a-2273-4c3a-bcb0-177266edea1d.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "5987d207-e4cc-4253-a03b-71703f2631dd.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "c5d9254d-5f5d-49af-aa4f-f6105831995acycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "6f22781c-62ae-4472-acab-54cbb126268b.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "eed55b21-1218-4f38-9b4f-d3634cfcb040.zip",
                        "size": 447626
                    },
                    {
                        "link": "output",
                        "name": "17bdd406-7b7f-4298-bdd9-c05f87ad78a7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "1cf20553-1476-44b3-8fac-9169ce8b26e7.csv",
                        "size": 232
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000011",
                "type": "compute",
                "runtime": 10.123,
                "parents": [
                    "baseline_cycles_00000009"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000012"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bb123d34-3e1d-4830-a2c7-335da6157aff.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "7bd1bfad-7377-4887-ace8-cc27931fdf2c.csv",
                        "size": 104
                    },
                    {
                        "link": "input",
                        "name": "e2052007-63b9-41a3-898d-c3d0da31152d.zip",
                        "size": 3593665
                    },
                    {
                        "link": "input",
                        "name": "cb5ca90a-3ce3-4d9e-9dba-3894c64a7f96.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "d39e9354-773c-4258-aaab-39b98646fb16.weather",
                        "size": 464698
                    },
                    {
                        "link": "input",
                        "name": "62902cad-1674-4f87-9e75-7250a2788c9e.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "f30636e5-4875-4ec6-beba-eae4fc874a7a.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "b300bca9-17fe-4aef-8f95-f0d8c451a3afcycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "b1f96df5-92dc-4680-bac5-3e30d0ec2131.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "e9597621-c0d4-4e62-ac0f-b201d3958cd6.csv",
                        "size": 201
                    },
                    {
                        "link": "output",
                        "name": "1e81916a-2973-44b3-8e57-ea8cf8f2c9dc.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "75b79fc6-d611-4536-acb6-bbb05b2ff9dc.zip",
                        "size": 1658469
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000012",
                "type": "compute",
                "runtime": 1.253,
                "parents": [
                    "fertilizer_increase_cycles_00000011"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000022"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e9597621-c0d4-4e62-ac0f-b201d3958cd6.csv",
                        "size": 201
                    },
                    {
                        "link": "input",
                        "name": "1e81916a-2973-44b3-8e57-ea8cf8f2c9dc.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "75b79fc6-d611-4536-acb6-bbb05b2ff9dc.zip",
                        "size": 1658469
                    },
                    {
                        "link": "output",
                        "name": "f9c34895-f926-4a84-8afa-cc6b70a4e981.csv",
                        "size": 6222
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000013",
                "type": "compute",
                "runtime": 41.512,
                "parents": [],
                "children": [
                    "cycles_00000014",
                    "fertilizer_increase_cycles_00000015"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "85eb3353-2285-4b04-80e2-86dd3bc04506.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "defcd750-62fc-47b1-b11f-e14df4e639c8.weather",
                        "size": 138772
                    },
                    {
                        "link": "input",
                        "name": "918aec00-441f-4b45-a4f1-36320c408c26.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "2c9fe544-96bb-4c40-b363-871427279993.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "02a8b47f-0201-407f-8b7a-89d44631d39dcycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "7d31c817-f699-45ca-a42e-478c8b4ccee0.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "46e83799-e447-430a-98d5-fba882eaba74.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "ca613514-8a4c-4508-b20c-bdcfc8731ad4.csv",
                        "size": 262
                    },
                    {
                        "link": "output",
                        "name": "45e01f44-a1fc-488d-96f4-8bd01b1372c3.zip",
                        "size": 3543754
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000014",
                "type": "compute",
                "runtime": 57.845,
                "parents": [
                    "baseline_cycles_00000013"
                ],
                "children": [
                    "cycles_output_summary_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "46e83799-e447-430a-98d5-fba882eaba74.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "ca613514-8a4c-4508-b20c-bdcfc8731ad4.csv",
                        "size": 262
                    },
                    {
                        "link": "input",
                        "name": "45e01f44-a1fc-488d-96f4-8bd01b1372c3.zip",
                        "size": 3543754
                    },
                    {
                        "link": "input",
                        "name": "e2f24e73-40db-4031-bed2-01a9e5bd703a.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "df4c2165-311c-49e8-b6a9-29d4b6ae9672.weather",
                        "size": 279396
                    },
                    {
                        "link": "input",
                        "name": "e4b2adb8-f10e-40ab-8c38-e189f64a992a.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "3056feac-5e39-4ec1-89fc-cb84a4084e84.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "b0fec38d-5cc7-4d75-be6a-c017d5f1a6f3cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "a3b74bea-920b-427a-b53e-e3d0b57421b4.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "11f21a9f-591f-4b48-93bc-676407e18bff.zip",
                        "size": 3415365
                    },
                    {
                        "link": "output",
                        "name": "32f02f56-396b-47c8-9915-d8e7da2be776.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "e923b8dc-3da8-432b-bd91-09f35210cb8c.csv",
                        "size": 303
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000015",
                "type": "compute",
                "runtime": 10.123,
                "parents": [
                    "baseline_cycles_00000013"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000016"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "46e83799-e447-430a-98d5-fba882eaba74.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "ca613514-8a4c-4508-b20c-bdcfc8731ad4.csv",
                        "size": 262
                    },
                    {
                        "link": "input",
                        "name": "45e01f44-a1fc-488d-96f4-8bd01b1372c3.zip",
                        "size": 3543754
                    },
                    {
                        "link": "input",
                        "name": "c5c27b23-f160-4aa1-9703-49d96ebf49a3.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "6ac3f29e-84ad-4fae-8d90-5f09ccde1603.weather",
                        "size": 194240
                    },
                    {
                        "link": "input",
                        "name": "e08d616c-9d76-4aed-9ac9-6c3ec7ac394a.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "ef21bc7b-0c6e-4c61-a58f-63c7be1388e2.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "e7b95125-4026-4f65-9eff-9f1ab09ce05ccycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "76cb9f47-78f1-4124-b12d-3314370d449c.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "19d04868-472a-4254-abab-ba5ec89317ef.csv",
                        "size": 130
                    },
                    {
                        "link": "output",
                        "name": "d6a88ffb-6914-4283-a522-c697c2ac9efb.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "ff979636-6f84-4d66-82db-e5d7bc24dc51.zip",
                        "size": 448675
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000016",
                "type": "compute",
                "runtime": 1.346,
                "parents": [
                    "fertilizer_increase_cycles_00000015"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000022"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "19d04868-472a-4254-abab-ba5ec89317ef.csv",
                        "size": 130
                    },
                    {
                        "link": "input",
                        "name": "d6a88ffb-6914-4283-a522-c697c2ac9efb.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "ff979636-6f84-4d66-82db-e5d7bc24dc51.zip",
                        "size": 448675
                    },
                    {
                        "link": "output",
                        "name": "33409510-d872-40cc-9f3f-bd730fad4c15.csv",
                        "size": 5170
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000017",
                "type": "compute",
                "runtime": 61.88,
                "parents": [],
                "children": [
                    "cycles_00000018",
                    "fertilizer_increase_cycles_00000019"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "fa75f87a-855a-4d17-8e59-fadfdf6d5e64.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "9d89ee56-3a44-4599-8695-2d06e9eec1f0.weather",
                        "size": 482771
                    },
                    {
                        "link": "input",
                        "name": "6ae7c7f1-ddad-4a4b-8676-e279fed25245.operation",
                        "size": 1806
                    },
                    {
                        "link": "input",
                        "name": "f6e485ef-e92c-480f-8306-e190f9d4f8b7.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "93aa8019-1fb6-4335-9453-17d4f474cf97cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "df1e823f-4684-4c03-92fb-65cd834a41fd.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "4bb63b5a-07eb-492b-a793-c7f0fab7734f.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "b3b78186-ce18-40f9-a261-7ced551b60c7.csv",
                        "size": 235
                    },
                    {
                        "link": "output",
                        "name": "bee667cb-35e2-49f6-84bf-a4f036c28a6b.zip",
                        "size": 2718579
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000018",
                "type": "compute",
                "runtime": 31.522,
                "parents": [
                    "baseline_cycles_00000017"
                ],
                "children": [
                    "cycles_output_summary_00000021"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4bb63b5a-07eb-492b-a793-c7f0fab7734f.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "b3b78186-ce18-40f9-a261-7ced551b60c7.csv",
                        "size": 235
                    },
                    {
                        "link": "input",
                        "name": "bee667cb-35e2-49f6-84bf-a4f036c28a6b.zip",
                        "size": 2718579
                    },
                    {
                        "link": "input",
                        "name": "9e59fecd-0d52-4f74-8125-015fae27cea6.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "a9aec12a-307d-4764-9bcf-9089dbe088c3.weather",
                        "size": 457652
                    },
                    {
                        "link": "input",
                        "name": "2d08f2c8-e07f-42b5-a58b-9ed44f7132a6.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "34ceb183-9dd6-4614-a232-e78ac5f004cc.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "6ba39d83-d3d2-4070-ae7e-c66c24086214cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "faa81f27-62dd-4b1d-a8c4-e47800162709.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "50ba01f6-d4db-427e-9a26-f4374e5022ba.zip",
                        "size": 447626
                    },
                    {
                        "link": "output",
                        "name": "31fdf5d2-8e79-44b6-a44f-17d3026f2c53.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "79a17de1-e1ab-48d3-834d-895a92999a13.csv",
                        "size": 62
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000019",
                "type": "compute",
                "runtime": 50.785,
                "parents": [
                    "baseline_cycles_00000017"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000020"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4bb63b5a-07eb-492b-a793-c7f0fab7734f.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "b3b78186-ce18-40f9-a261-7ced551b60c7.csv",
                        "size": 235
                    },
                    {
                        "link": "input",
                        "name": "bee667cb-35e2-49f6-84bf-a4f036c28a6b.zip",
                        "size": 2718579
                    },
                    {
                        "link": "input",
                        "name": "97e5ef38-7efd-4374-bae6-ce91bdfc40b7.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "cc2f1bfd-4c4c-421a-9cd5-37491897195b.weather",
                        "size": 158425
                    },
                    {
                        "link": "input",
                        "name": "3b148fb3-fa4d-4f2a-af14-1b9ef7ff0dc6.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "ff201d6c-5a0d-4a01-b9ef-6a2197f5a451.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "4dba90ea-4441-497f-8927-bd0cf328206ecycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "2d4149ea-7264-4583-b304-06a7eff8d64f.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "429507ee-79b8-4e7f-af63-7c7b9bd9f5ea.csv",
                        "size": 259
                    },
                    {
                        "link": "output",
                        "name": "94bca6c2-fe75-46a3-9dfa-7d58a55b016e.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "2c6d7b6e-a6da-4102-b770-5e3a2191302d.zip",
                        "size": 834139
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000020",
                "type": "compute",
                "runtime": 1.305,
                "parents": [
                    "fertilizer_increase_cycles_00000019"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000022"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "429507ee-79b8-4e7f-af63-7c7b9bd9f5ea.csv",
                        "size": 259
                    },
                    {
                        "link": "input",
                        "name": "94bca6c2-fe75-46a3-9dfa-7d58a55b016e.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "2c6d7b6e-a6da-4102-b770-5e3a2191302d.zip",
                        "size": 834139
                    },
                    {
                        "link": "output",
                        "name": "b9b75984-d596-4b33-a7e0-ca3b9ed79188.csv",
                        "size": 4101
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_output_summary_00000021",
                "type": "compute",
                "runtime": 0.062,
                "parents": [
                    "cycles_00000002",
                    "cycles_00000006",
                    "cycles_00000010",
                    "cycles_00000014",
                    "cycles_00000018"
                ],
                "children": [
                    "cycles_plots_00000045"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "b4372279-3e75-4bf9-8614-a0759dd919ee.zip",
                        "size": 2355101
                    },
                    {
                        "link": "input",
                        "name": "2a296ac7-7f39-4a23-8ef1-3f84ac2fed80.dat",
                        "size": 1808675
                    },
                    {
                        "link": "input",
                        "name": "f87365f1-e875-4fb0-a3b1-4fd897386612.csv",
                        "size": 48
                    },
                    {
                        "link": "input",
                        "name": "724b33f6-c414-4190-be84-0c099bf843a0.zip",
                        "size": 4135532
                    },
                    {
                        "link": "input",
                        "name": "1267dfe6-ac74-468f-92d3-19bb41a2b9ee.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "8c3e554e-edcd-474a-8f6f-60c1e9bb74f8.csv",
                        "size": 109
                    },
                    {
                        "link": "input",
                        "name": "eed55b21-1218-4f38-9b4f-d3634cfcb040.zip",
                        "size": 447626
                    },
                    {
                        "link": "input",
                        "name": "17bdd406-7b7f-4298-bdd9-c05f87ad78a7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "1cf20553-1476-44b3-8fac-9169ce8b26e7.csv",
                        "size": 232
                    },
                    {
                        "link": "input",
                        "name": "11f21a9f-591f-4b48-93bc-676407e18bff.zip",
                        "size": 3415365
                    },
                    {
                        "link": "input",
                        "name": "32f02f56-396b-47c8-9915-d8e7da2be776.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "e923b8dc-3da8-432b-bd91-09f35210cb8c.csv",
                        "size": 303
                    },
                    {
                        "link": "input",
                        "name": "50ba01f6-d4db-427e-9a26-f4374e5022ba.zip",
                        "size": 447626
                    },
                    {
                        "link": "input",
                        "name": "31fdf5d2-8e79-44b6-a44f-17d3026f2c53.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "79a17de1-e1ab-48d3-834d-895a92999a13.csv",
                        "size": 62
                    },
                    {
                        "link": "output",
                        "name": "0136d80b-9327-4d2f-83ad-adda6a329f51.csv",
                        "size": 257366
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_summary_00000022",
                "type": "compute",
                "runtime": 0.261,
                "parents": [
                    "cycles_fertilizer_increase_output_parser_00000004",
                    "cycles_fertilizer_increase_output_parser_00000008",
                    "cycles_fertilizer_increase_output_parser_00000012",
                    "cycles_fertilizer_increase_output_parser_00000016",
                    "cycles_fertilizer_increase_output_parser_00000020"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "a78a71fa-a65f-4864-9b73-665b797e3f12.csv",
                        "size": 7895
                    },
                    {
                        "link": "input",
                        "name": "ee1aa48a-a8da-4c00-9e6f-3ae90b99a7a4.csv",
                        "size": 7732
                    },
                    {
                        "link": "input",
                        "name": "f9c34895-f926-4a84-8afa-cc6b70a4e981.csv",
                        "size": 6222
                    },
                    {
                        "link": "input",
                        "name": "33409510-d872-40cc-9f3f-bd730fad4c15.csv",
                        "size": 5170
                    },
                    {
                        "link": "input",
                        "name": "b9b75984-d596-4b33-a7e0-ca3b9ed79188.csv",
                        "size": 4101
                    },
                    {
                        "link": "output",
                        "name": "9014f0f7-0932-4981-9fef-526ea3f9e757.csv",
                        "size": 422954
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000023",
                "type": "compute",
                "runtime": 11.06,
                "parents": [],
                "children": [
                    "cycles_00000024",
                    "fertilizer_increase_cycles_00000025"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "bb6a0c79-cf25-408f-98db-434ff8c96da9.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "10390806-cd10-4082-9a31-ad4c70bc5387.weather",
                        "size": 114884
                    },
                    {
                        "link": "input",
                        "name": "942651a0-eeb3-41e2-86f6-117189f2c605.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "ededef13-c0ff-419b-bb44-d494cefed84b.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "26ac0758-fbd9-4256-8683-04a4e904fa46cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "51640ac5-dcf2-4d43-b4fc-9179967f2897.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "1f968f59-3303-4179-81f3-7bc242cac560.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "5e9b6d81-923a-4b90-b37e-13994405efb7.csv",
                        "size": 291
                    },
                    {
                        "link": "output",
                        "name": "d182b689-8edc-4959-a30e-a3693f9d00c7.zip",
                        "size": 2676203
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000024",
                "type": "compute",
                "runtime": 41.704,
                "parents": [
                    "baseline_cycles_00000023"
                ],
                "children": [
                    "cycles_output_summary_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1f968f59-3303-4179-81f3-7bc242cac560.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "5e9b6d81-923a-4b90-b37e-13994405efb7.csv",
                        "size": 291
                    },
                    {
                        "link": "input",
                        "name": "d182b689-8edc-4959-a30e-a3693f9d00c7.zip",
                        "size": 2676203
                    },
                    {
                        "link": "input",
                        "name": "d53ab60d-45d7-49a0-a0fe-de8d00ad5986.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "53e68707-e4f7-47e4-b19e-062e3cf3c7f5.weather",
                        "size": 313226
                    },
                    {
                        "link": "input",
                        "name": "98a2526c-6bfb-4d80-a1ff-183d323d0161.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "64536296-2e55-4411-acfb-fdc239377239.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "ad992e2f-69b1-4c2e-a435-faca24e09f53cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "3fe138d4-d194-44e2-8484-ab1aa3ae9853.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "a30eaaab-0092-4437-ac4a-37577c540bb6.zip",
                        "size": 519863
                    },
                    {
                        "link": "output",
                        "name": "7ab205e1-39e4-4696-b35e-a5d7a6f1e465.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "b94c8bc3-6ca8-41b8-88bd-70a5a12248ba.csv",
                        "size": 135
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000025",
                "type": "compute",
                "runtime": 10.123,
                "parents": [
                    "baseline_cycles_00000023"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000026"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1f968f59-3303-4179-81f3-7bc242cac560.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "5e9b6d81-923a-4b90-b37e-13994405efb7.csv",
                        "size": 291
                    },
                    {
                        "link": "input",
                        "name": "d182b689-8edc-4959-a30e-a3693f9d00c7.zip",
                        "size": 2676203
                    },
                    {
                        "link": "input",
                        "name": "f55da483-17e5-4a14-880f-e894436b2457.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "ebff3a9c-2c8b-4ebf-9660-f18a87203d91.weather",
                        "size": 231702
                    },
                    {
                        "link": "input",
                        "name": "b9b916d1-bc6a-4d81-9086-8f6530620e51.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "f2353fcf-4e26-45e9-adf2-d4f59fcc8de1.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "20692df0-30e0-404e-9b5a-f4236fdd3aeccycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "8d71d461-b5e8-482d-95f1-e5c159c846de.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "763d5418-45e2-472e-84de-998de401696d.csv",
                        "size": 225
                    },
                    {
                        "link": "output",
                        "name": "504b2c21-1e49-4ded-8da3-d34b14903ba9.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "a616f97f-5805-4f95-ac9a-c04272c8e5e4.zip",
                        "size": 448675
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000026",
                "type": "compute",
                "runtime": 0.602,
                "parents": [
                    "fertilizer_increase_cycles_00000025"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "763d5418-45e2-472e-84de-998de401696d.csv",
                        "size": 225
                    },
                    {
                        "link": "input",
                        "name": "504b2c21-1e49-4ded-8da3-d34b14903ba9.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "a616f97f-5805-4f95-ac9a-c04272c8e5e4.zip",
                        "size": 448675
                    },
                    {
                        "link": "output",
                        "name": "a23af154-3e8e-4176-a7b8-a22eb4ae406d.csv",
                        "size": 860
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000027",
                "type": "compute",
                "runtime": 11.06,
                "parents": [],
                "children": [
                    "cycles_00000028",
                    "fertilizer_increase_cycles_00000029"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e9996e0e-7f8a-495a-823d-145748bb3689.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "cd765ebc-3839-41d8-8b76-b63f8f999e92.weather",
                        "size": 195551
                    },
                    {
                        "link": "input",
                        "name": "04040141-c202-462e-99ed-ebb17be384d3.operation",
                        "size": 1806
                    },
                    {
                        "link": "input",
                        "name": "fd77fcfd-52cd-4787-b50e-8b46721699f6.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "186a2cd4-a316-405d-9027-307a8cccab72cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "bc95a9df-cff4-48b9-89d6-9c0e5baec27c.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "c48af7f2-f605-416a-bd3b-029713ce9bc0.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "5273fa54-c604-40cd-82e3-9bc2f8757a16.csv",
                        "size": 225
                    },
                    {
                        "link": "output",
                        "name": "f2e093c7-824e-4649-875a-246f6285d178.zip",
                        "size": 445841
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000028",
                "type": "compute",
                "runtime": 10.16,
                "parents": [
                    "baseline_cycles_00000027"
                ],
                "children": [
                    "cycles_output_summary_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c48af7f2-f605-416a-bd3b-029713ce9bc0.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "5273fa54-c604-40cd-82e3-9bc2f8757a16.csv",
                        "size": 225
                    },
                    {
                        "link": "input",
                        "name": "f2e093c7-824e-4649-875a-246f6285d178.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "af53a827-ac3c-42a5-a665-a8398da92140.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "17ce68cb-0f41-4c94-9dd3-939e33e4eaae.weather",
                        "size": 385723
                    },
                    {
                        "link": "input",
                        "name": "3f8c714c-fbd9-41ef-947f-3623053a1e05.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "5a29ac39-67c0-42d8-876c-972d71f7954a.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "24e95e16-10bb-4336-927d-ab0e882c5b89cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "51785a42-bde6-456e-9aa6-5c770f5cecf9.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "52774584-3685-4ecb-a857-3489f033601c.zip",
                        "size": 3611628
                    },
                    {
                        "link": "output",
                        "name": "fcdddd1d-263d-4ee4-9ce6-c1fd953e2e85.dat",
                        "size": 1808675
                    },
                    {
                        "link": "output",
                        "name": "b1fa8ab6-15e5-418a-904b-ee2d1cb1180d.csv",
                        "size": 192
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000029",
                "type": "compute",
                "runtime": 59.605,
                "parents": [
                    "baseline_cycles_00000027"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000030"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c48af7f2-f605-416a-bd3b-029713ce9bc0.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "5273fa54-c604-40cd-82e3-9bc2f8757a16.csv",
                        "size": 225
                    },
                    {
                        "link": "input",
                        "name": "f2e093c7-824e-4649-875a-246f6285d178.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "71fca9a3-b838-4c0c-a4e3-ce174f30d906.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "cd91b48e-46bd-4147-b2b0-2d083663d197.weather",
                        "size": 452856
                    },
                    {
                        "link": "input",
                        "name": "9c59e30f-68df-46a8-aa6b-787d094c20fc.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "f0eb73c4-f6ef-4973-8b58-cba5ed0e0047.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "34fc7cf2-f95f-46ca-9ab5-7f97c9b0262ecycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "be120e35-15fe-4978-b987-f2fb0945fcd4.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "49f8e081-25bf-46d9-9afc-3a90ba192d0b.csv",
                        "size": 153
                    },
                    {
                        "link": "output",
                        "name": "79b081ea-9c62-4e7c-a89a-86fdd48c91b0.dat",
                        "size": 1808675
                    },
                    {
                        "link": "output",
                        "name": "cf515d66-58a0-4e85-bbc7-12031c41344b.zip",
                        "size": 3562523
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000030",
                "type": "compute",
                "runtime": 1.32,
                "parents": [
                    "fertilizer_increase_cycles_00000029"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "49f8e081-25bf-46d9-9afc-3a90ba192d0b.csv",
                        "size": 153
                    },
                    {
                        "link": "input",
                        "name": "79b081ea-9c62-4e7c-a89a-86fdd48c91b0.dat",
                        "size": 1808675
                    },
                    {
                        "link": "input",
                        "name": "cf515d66-58a0-4e85-bbc7-12031c41344b.zip",
                        "size": 3562523
                    },
                    {
                        "link": "output",
                        "name": "b6349825-5726-427b-8b53-81d3e0021868.csv",
                        "size": 860
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000031",
                "type": "compute",
                "runtime": 74.146,
                "parents": [],
                "children": [
                    "cycles_00000032",
                    "fertilizer_increase_cycles_00000033"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "77bcde2a-4f72-4470-8c53-a62abc627e3b.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "6cb9894f-2df1-45c4-be95-e28b18fc017a.weather",
                        "size": 160545
                    },
                    {
                        "link": "input",
                        "name": "63293d6c-8219-4340-9e26-095e2ad29ebe.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "67b56cb3-a6eb-481d-b34c-2d0baca781eb.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "094aff64-9c9c-43c1-8edd-db791cde26cecycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "ad2afb9b-acc1-43d2-b530-47a3fcb8efff.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "9472b1c3-3a05-4707-9fdc-59a5d2c93337.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "6dc4e3fe-d8f6-4c84-93f0-28e3428a3b4c.csv",
                        "size": 305
                    },
                    {
                        "link": "output",
                        "name": "177cb461-c699-4ec6-ad71-9df387c6cef8.zip",
                        "size": 445841
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000032",
                "type": "compute",
                "runtime": 28.281,
                "parents": [
                    "baseline_cycles_00000031"
                ],
                "children": [
                    "cycles_output_summary_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9472b1c3-3a05-4707-9fdc-59a5d2c93337.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "6dc4e3fe-d8f6-4c84-93f0-28e3428a3b4c.csv",
                        "size": 305
                    },
                    {
                        "link": "input",
                        "name": "177cb461-c699-4ec6-ad71-9df387c6cef8.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "3fc0a31c-c30f-4dc9-b858-7218b4f7ee94.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "9636b1a8-e67b-4ccf-9ec3-72ffb4c16626.weather",
                        "size": 472200
                    },
                    {
                        "link": "input",
                        "name": "451ad854-1c05-4f2b-acd6-ef000a323619.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "4b2b9e4a-6142-4235-a3dd-ef09d0743078.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "c313aa22-048b-40f4-8d43-baf9d1be154bcycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "f85fa69e-0641-49ff-a9c8-ffd44f84a81e.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "8c4d9ffd-7357-43d6-b48e-ce95faf128da.zip",
                        "size": 447626
                    },
                    {
                        "link": "output",
                        "name": "dea9bc36-9238-4d10-b993-08f11210f051.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "d694319a-3aa1-4d59-b3f5-3cd60ce71646.csv",
                        "size": 32
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000033",
                "type": "compute",
                "runtime": 10.123,
                "parents": [
                    "baseline_cycles_00000031"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000034"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9472b1c3-3a05-4707-9fdc-59a5d2c93337.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "6dc4e3fe-d8f6-4c84-93f0-28e3428a3b4c.csv",
                        "size": 305
                    },
                    {
                        "link": "input",
                        "name": "177cb461-c699-4ec6-ad71-9df387c6cef8.zip",
                        "size": 445841
                    },
                    {
                        "link": "input",
                        "name": "c44759f3-151d-4f2c-bfdf-ee2d63be6209.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "9f5005ca-dc26-4d11-830b-baf37d8278a5.weather",
                        "size": 484646
                    },
                    {
                        "link": "input",
                        "name": "181952ce-0e59-4fcd-ab53-df806c1978ec.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "9fa7006e-4a18-499b-8050-fcb986344893.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "4449ea89-9928-46f7-822c-b9c9e8ddf59acycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "c8aba149-e0ec-4212-b409-2b2edd20abb4.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "a8a10113-1015-4670-918e-0e5f19164c76.csv",
                        "size": 66
                    },
                    {
                        "link": "output",
                        "name": "0305012b-7743-4e28-91b4-aed9b796d3f7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "ae8d54ed-09f5-45b1-b3bb-e00f6fb7b641.zip",
                        "size": 448675
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000034",
                "type": "compute",
                "runtime": 1.214,
                "parents": [
                    "fertilizer_increase_cycles_00000033"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a8a10113-1015-4670-918e-0e5f19164c76.csv",
                        "size": 66
                    },
                    {
                        "link": "input",
                        "name": "0305012b-7743-4e28-91b4-aed9b796d3f7.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "ae8d54ed-09f5-45b1-b3bb-e00f6fb7b641.zip",
                        "size": 448675
                    },
                    {
                        "link": "output",
                        "name": "8ac6cbd8-99e9-4f85-9950-fa06b3745656.csv",
                        "size": 4532
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000035",
                "type": "compute",
                "runtime": 39.953,
                "parents": [],
                "children": [
                    "cycles_00000036",
                    "fertilizer_increase_cycles_00000037"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "c043934b-ed46-4cf3-8783-1ce536633f3a.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "6d9bf5e9-bb01-48a3-a031-27411f018055.weather",
                        "size": 224262
                    },
                    {
                        "link": "input",
                        "name": "77dd264f-5450-4270-8781-e8b3d197b8f2.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "9cc9340d-eb8c-4e40-bea2-ab6b597e414f.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "6036d855-a6e5-4f54-b0f2-cb56944796a8cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "b6981d54-9f45-4704-85b1-5856faf828a3.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "f949dad1-fae6-4cd3-893f-aa1e32ad8863.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "62b1374b-e9c6-48e9-aab2-c1473f77a0ef.csv",
                        "size": 230
                    },
                    {
                        "link": "output",
                        "name": "1682cb68-a2ff-478b-991a-c82b6fbf7cd2.zip",
                        "size": 1786288
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000036",
                "type": "compute",
                "runtime": 10.16,
                "parents": [
                    "baseline_cycles_00000035"
                ],
                "children": [
                    "cycles_output_summary_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f949dad1-fae6-4cd3-893f-aa1e32ad8863.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "62b1374b-e9c6-48e9-aab2-c1473f77a0ef.csv",
                        "size": 230
                    },
                    {
                        "link": "input",
                        "name": "1682cb68-a2ff-478b-991a-c82b6fbf7cd2.zip",
                        "size": 1786288
                    },
                    {
                        "link": "input",
                        "name": "32c6b7b3-0b76-4af1-bfce-878e58c877ef.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "19fa05fb-a27a-4958-bcff-9e6b9aee9260.weather",
                        "size": 424715
                    },
                    {
                        "link": "input",
                        "name": "fc4bbd71-e267-42a5-8b55-ba121de5db42.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "b27d0beb-d389-4b0f-af4a-3bb7960405c6.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "c97a5c94-433c-4cbb-ad92-4728339b43e9cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "e572158f-f23b-4e6d-a097-cd94c206cd5d.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "a4c49605-05b8-467a-8e7e-d7e74ff33f35.zip",
                        "size": 447626
                    },
                    {
                        "link": "output",
                        "name": "2bd88650-bd53-4411-835d-35bcd0828be5.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "be3346db-d2f1-4c80-a00c-aabc06e313b9.csv",
                        "size": 272
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000037",
                "type": "compute",
                "runtime": 22.55,
                "parents": [
                    "baseline_cycles_00000035"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000038"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f949dad1-fae6-4cd3-893f-aa1e32ad8863.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "62b1374b-e9c6-48e9-aab2-c1473f77a0ef.csv",
                        "size": 230
                    },
                    {
                        "link": "input",
                        "name": "1682cb68-a2ff-478b-991a-c82b6fbf7cd2.zip",
                        "size": 1786288
                    },
                    {
                        "link": "input",
                        "name": "d5dc4e25-5fba-450d-9b5d-45df1e42aa6c.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "6c8146d4-04ea-46c4-8ba3-06f7fcb42dba.weather",
                        "size": 163639
                    },
                    {
                        "link": "input",
                        "name": "d41804ad-9653-4cfd-b4b3-83a2eec8044f.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "1c2d269a-34a4-4b31-ae48-2937ed379d82.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "45dc804a-b3fa-458f-ab83-39725973d9aecycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "796a76b2-ab08-4820-8d0d-1e0899fc30e3.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "f97bf0c7-de6b-4e16-8975-b016d024431e.csv",
                        "size": 108
                    },
                    {
                        "link": "output",
                        "name": "c5ca9f9a-3a36-4ba5-ab01-2ab198a1edd0.dat",
                        "size": 1808675
                    },
                    {
                        "link": "output",
                        "name": "5f1652ca-0c15-449c-aaaa-94eb39c8d291.zip",
                        "size": 448675
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000038",
                "type": "compute",
                "runtime": 1.125,
                "parents": [
                    "fertilizer_increase_cycles_00000037"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f97bf0c7-de6b-4e16-8975-b016d024431e.csv",
                        "size": 108
                    },
                    {
                        "link": "input",
                        "name": "c5ca9f9a-3a36-4ba5-ab01-2ab198a1edd0.dat",
                        "size": 1808675
                    },
                    {
                        "link": "input",
                        "name": "5f1652ca-0c15-449c-aaaa-94eb39c8d291.zip",
                        "size": 448675
                    },
                    {
                        "link": "output",
                        "name": "e812dd6b-c9e8-4dab-9089-0c3d2a5fc98e.csv",
                        "size": 7814
                    }
                ],
                "cores": 1
            },
            {
                "name": "baseline_cycles_00000039",
                "type": "compute",
                "runtime": 81.606,
                "parents": [],
                "children": [
                    "cycles_00000040",
                    "fertilizer_increase_cycles_00000041"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1af8281a-793e-46c8-b461-f571495156cc.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "8237e7cc-6412-4f3c-b8cd-8ea0695eb436.weather",
                        "size": 397056
                    },
                    {
                        "link": "input",
                        "name": "93000a88-10ca-4976-949f-4ce0a0fef364.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "c990696d-c781-479b-9373-da09d1e91fe9.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "c2dbe4bb-c333-446e-b5e0-8230fb428420cycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "4ddabc75-cdba-4982-b3b8-097cfda53890.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "f0011b55-cf40-448e-9b3f-ccb07ab23f6e.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "256948f4-2522-4956-8987-af45024cfc0c.csv",
                        "size": 235
                    },
                    {
                        "link": "output",
                        "name": "343fe1e9-1887-4e20-a2c0-5de9ea94dfdd.zip",
                        "size": 3482450
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_00000040",
                "type": "compute",
                "runtime": 26.798,
                "parents": [
                    "baseline_cycles_00000039"
                ],
                "children": [
                    "cycles_output_summary_00000043"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f0011b55-cf40-448e-9b3f-ccb07ab23f6e.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "256948f4-2522-4956-8987-af45024cfc0c.csv",
                        "size": 235
                    },
                    {
                        "link": "input",
                        "name": "343fe1e9-1887-4e20-a2c0-5de9ea94dfdd.zip",
                        "size": 3482450
                    },
                    {
                        "link": "input",
                        "name": "4d8c17f1-6cce-4566-8ab8-0c907bf6536b.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "672f5895-5603-4050-9fe6-a680794c9c53.weather",
                        "size": 117127
                    },
                    {
                        "link": "input",
                        "name": "749a026f-40c6-4b15-843d-057c4c25761d.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "83adc9f9-6640-414e-9f19-2a32e299eafd.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "3f8c636a-bf9c-42a7-bb00-fc970abcbfcbcycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "da8d58b9-e1bf-46d3-ad93-0cf7ae2ecccc.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "951cf8af-0fed-4870-a475-0a78e7a9f31f.zip",
                        "size": 447626
                    },
                    {
                        "link": "output",
                        "name": "8dcfc2f2-1236-423f-ac8c-2a01b935d95c.dat",
                        "size": 1808674
                    },
                    {
                        "link": "output",
                        "name": "86784c9f-a5f7-4c88-919d-466b25b21cb4.csv",
                        "size": 251
                    }
                ],
                "cores": 1
            },
            {
                "name": "fertilizer_increase_cycles_00000041",
                "type": "compute",
                "runtime": 13.204,
                "parents": [
                    "baseline_cycles_00000039"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_parser_00000042"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f0011b55-cf40-448e-9b3f-ccb07ab23f6e.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "256948f4-2522-4956-8987-af45024cfc0c.csv",
                        "size": 235
                    },
                    {
                        "link": "input",
                        "name": "343fe1e9-1887-4e20-a2c0-5de9ea94dfdd.zip",
                        "size": 3482450
                    },
                    {
                        "link": "input",
                        "name": "efbf0973-b69c-47b3-856e-9f4c3bb3d961.soil",
                        "size": 739
                    },
                    {
                        "link": "input",
                        "name": "6f0d8853-fa67-4df7-ac0d-eb4a6ab51c3c.weather",
                        "size": 223262
                    },
                    {
                        "link": "input",
                        "name": "51871d55-2e11-4a17-9a06-363611affec9.operation",
                        "size": 1805
                    },
                    {
                        "link": "input",
                        "name": "4672d451-3b18-4fb4-8051-54aba1d06d3c.ctrl",
                        "size": 766
                    },
                    {
                        "link": "input",
                        "name": "822aa46f-5a3e-4fe2-bbee-e7e4b4c9236acycles_exe",
                        "size": 694648
                    },
                    {
                        "link": "input",
                        "name": "6ac03ab4-94e9-485f-bd7b-c2c1db36a7a0.crop",
                        "size": 14434
                    },
                    {
                        "link": "output",
                        "name": "60d1b3b8-3bd7-43a5-909c-6dfb3749038d.csv",
                        "size": 260
                    },
                    {
                        "link": "output",
                        "name": "b680036a-bec2-4c05-bed5-51e9e150cf54.dat",
                        "size": 1808675
                    },
                    {
                        "link": "output",
                        "name": "090d4380-d57b-4d4c-bb84-e6b3f6e0c44b.zip",
                        "size": 1152670
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_parser_00000042",
                "type": "compute",
                "runtime": 1.017,
                "parents": [
                    "fertilizer_increase_cycles_00000041"
                ],
                "children": [
                    "cycles_fertilizer_increase_output_summary_00000044"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "60d1b3b8-3bd7-43a5-909c-6dfb3749038d.csv",
                        "size": 260
                    },
                    {
                        "link": "input",
                        "name": "b680036a-bec2-4c05-bed5-51e9e150cf54.dat",
                        "size": 1808675
                    },
                    {
                        "link": "input",
                        "name": "090d4380-d57b-4d4c-bb84-e6b3f6e0c44b.zip",
                        "size": 1152670
                    },
                    {
                        "link": "output",
                        "name": "06f53773-cb1d-46e8-91e6-ba9f0bf58c05.csv",
                        "size": 6495
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_output_summary_00000043",
                "type": "compute",
                "runtime": 0.039,
                "parents": [
                    "cycles_00000024",
                    "cycles_00000028",
                    "cycles_00000032",
                    "cycles_00000036",
                    "cycles_00000040"
                ],
                "children": [
                    "cycles_plots_00000046"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "a30eaaab-0092-4437-ac4a-37577c540bb6.zip",
                        "size": 519863
                    },
                    {
                        "link": "input",
                        "name": "7ab205e1-39e4-4696-b35e-a5d7a6f1e465.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "b94c8bc3-6ca8-41b8-88bd-70a5a12248ba.csv",
                        "size": 135
                    },
                    {
                        "link": "input",
                        "name": "52774584-3685-4ecb-a857-3489f033601c.zip",
                        "size": 3611628
                    },
                    {
                        "link": "input",
                        "name": "fcdddd1d-263d-4ee4-9ce6-c1fd953e2e85.dat",
                        "size": 1808675
                    },
                    {
                        "link": "input",
                        "name": "b1fa8ab6-15e5-418a-904b-ee2d1cb1180d.csv",
                        "size": 192
                    },
                    {
                        "link": "input",
                        "name": "8c4d9ffd-7357-43d6-b48e-ce95faf128da.zip",
                        "size": 447626
                    },
                    {
                        "link": "input",
                        "name": "dea9bc36-9238-4d10-b993-08f11210f051.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "d694319a-3aa1-4d59-b3f5-3cd60ce71646.csv",
                        "size": 32
                    },
                    {
                        "link": "input",
                        "name": "a4c49605-05b8-467a-8e7e-d7e74ff33f35.zip",
                        "size": 447626
                    },
                    {
                        "link": "input",
                        "name": "2bd88650-bd53-4411-835d-35bcd0828be5.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "be3346db-d2f1-4c80-a00c-aabc06e313b9.csv",
                        "size": 272
                    },
                    {
                        "link": "input",
                        "name": "951cf8af-0fed-4870-a475-0a78e7a9f31f.zip",
                        "size": 447626
                    },
                    {
                        "link": "input",
                        "name": "8dcfc2f2-1236-423f-ac8c-2a01b935d95c.dat",
                        "size": 1808674
                    },
                    {
                        "link": "input",
                        "name": "86784c9f-a5f7-4c88-919d-466b25b21cb4.csv",
                        "size": 251
                    },
                    {
                        "link": "output",
                        "name": "e444727e-a0dc-485a-b613-399cd1b51e6c.csv",
                        "size": 257366
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_fertilizer_increase_output_summary_00000044",
                "type": "compute",
                "runtime": 0.254,
                "parents": [
                    "cycles_fertilizer_increase_output_parser_00000026",
                    "cycles_fertilizer_increase_output_parser_00000030",
                    "cycles_fertilizer_increase_output_parser_00000034",
                    "cycles_fertilizer_increase_output_parser_00000038",
                    "cycles_fertilizer_increase_output_parser_00000042"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "a23af154-3e8e-4176-a7b8-a22eb4ae406d.csv",
                        "size": 860
                    },
                    {
                        "link": "input",
                        "name": "b6349825-5726-427b-8b53-81d3e0021868.csv",
                        "size": 860
                    },
                    {
                        "link": "input",
                        "name": "8ac6cbd8-99e9-4f85-9950-fa06b3745656.csv",
                        "size": 4532
                    },
                    {
                        "link": "input",
                        "name": "e812dd6b-c9e8-4dab-9089-0c3d2a5fc98e.csv",
                        "size": 7814
                    },
                    {
                        "link": "input",
                        "name": "06f53773-cb1d-46e8-91e6-ba9f0bf58c05.csv",
                        "size": 6495
                    },
                    {
                        "link": "output",
                        "name": "f733126c-f530-4915-87d4-4e9704728d91.csv",
                        "size": 422954
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_plots_00000045",
                "type": "compute",
                "runtime": 51.457,
                "parents": [
                    "cycles_output_summary_00000021"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "0136d80b-9327-4d2f-83ad-adda6a329f51.csv",
                        "size": 257366
                    },
                    {
                        "link": "output",
                        "name": "2474f443-cf2d-41b8-9b0e-fcb4f255a350.gif",
                        "size": 4447023
                    }
                ],
                "cores": 1
            },
            {
                "name": "cycles_plots_00000046",
                "type": "compute",
                "runtime": 51.457,
                "parents": [
                    "cycles_output_summary_00000043"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "e444727e-a0dc-485a-b613-399cd1b51e6c.csv",
                        "size": 257366
                    },
                    {
                        "link": "output",
                        "name": "a12fefe6-da40-4700-9598-065bb415fdda.gif",
                        "size": 1427128
                    }
                ],
                "cores": 1
            }
        ],
        "machines": []
    }
}