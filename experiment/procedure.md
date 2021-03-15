### These steps will be followed for the experiment
**Procedure**
This simulation experiment covers three setups: Class A train of vehicles, Class B train of vehicles and
Class AA (tracked and wheeled) train of vehicles (Class 70 R). Abridge is considered on which 4 sets of
PZT patches are embedded. Each set contains 12 PZT patches. So overall, the bridge contains 48 sensors.<br>
The bridge has four spans. Initially in energy harvesting stage/idle state, each set of sensors are connected to the battery through wires.<br> The user can change choose the vehicle class (A or B or AA) to pass over the bridge. As the truck moves, the mechanical vibrations in the bridge result in generation of voltage across PZT patch.<br> The generated energy is stored inside a battery. In SHM state, SHM device (AD5933) is attached to the damaged span and the fully charged battery. The energy stored inside the battery is used for SHM of each damaged span.
<br><br>
<img src="images/pr2.png" height="400px">
<br><br>
<img src="images/pr3.png" height="400px">
<br><br>
Figure 2 (a) Energy harvesting stage for Class A train of vehicles (b) SHM of damaged span 1 (c) SHM of
damaged span 2 (d) SHM of damaged span 3<br><br>
By clicking the appropriate links, the user can download the signatures corresponding to the baseline
(undamaged) and damaged states. To statistically quantify damage, compute root mean square deviation
(RMSD) in conductance by following equation directly in MS excel:
<br><br>
<img src="images/pr1.png" height="100px">
<br><br>
Where<br><br>
 G<sup>0</sup><sub>i</sub> = Baseline conductance value at i<sup>th</sup> frequency.<br>
 G<sup>1</sup><sub>i</sub> = Conductance value after damage at i<sup>th</sup> frequency.<br>
n = No. of frequency data points
As an exercise plot a histogram of RMSD for the various damaged states.<br>
Note your observations and draw conclusions.
